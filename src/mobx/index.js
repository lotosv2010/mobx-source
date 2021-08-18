// Proxy 使用
const p = {name: 'proxy'};
const proxy = new Proxy(p, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver);
  }
})
console.dir(proxy.name);
