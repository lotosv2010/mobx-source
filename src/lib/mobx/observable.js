import Reaction from './reaction';

/**
 * 创建成可观察对象
 * @param {*} target 
 * @returns 
 */
function observable(target, key, descriptor) {
  if(typeof key === 'string') { // 通过装饰器实现的，先把装饰的对象进行深度代理
    let value = descriptor.initializer()
    value = createObservable(value);
    const reaction = new Reaction();
    return {
      enumerable: true,
      configurable: true,
      get() {
        reaction.collect();
        return value;
      },
      set(val) {
        value = val;
        reaction.run();
      }
    }
  }
  return createObservable(target);
}

// 创建代理
function createObservable(val) {
  // 声明一个专门用来代理的对象 
  const handler = () => {
    const reaction = new Reaction();
    return {
      get(target, key, receiver) {
        reaction.collect();
        return Reflect.get(target, key, receiver);
      },
      set(target, key, value, receiver) {
        if(Array.isArray(target) && key === 'length') return true; // 处理数组设置值时，触发两次的问题：设置值触发和length变化触发
        const res = Reflect.set(target, key, value, receiver);
        reaction.run();
        return res;
      }
    }
  }
  return deepProxy(val, handler);
}

// 深度代理
function deepProxy(val, handler) {
  if(typeof val !== 'object') {
    return val;
  }
  // 后序，从对象的最内层开始遍历
  for (const key in val) {
    val[key] = deepProxy(val[key], handler);
  }
  return new Proxy(val, handler());
}

export default observable;