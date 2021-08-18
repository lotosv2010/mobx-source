// 装饰器
// 类装饰
function add(target) {
  target.flag = 'ok'
}

// 属性装饰
function readonly(target, key, descriptor) {
  console.log(target, key, descriptor);
  descriptor.writable = false;
  // return descriptor; // 默认会返回 descriptor
}

// 方法装饰
function extendsSay(target, key, descriptor) {
  const oldSay = descriptor.value;
  descriptor.value = () => {
    console.log('start run');
    oldSay();
    console.log('finished run');
  }
}
@add
class Circle {
  @readonly PI = 3.14
  @extendsSay run() {
    console.log('run')
  }
}

const circle = new Circle();
// circle.PI = 3.141526; // Cannot assign to read only property 'PI' of object '#<Circle>'
circle.run();
console.log(Circle.flag, circle)
