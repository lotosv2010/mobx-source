import {observable, autorun} from '../lib/mobx';

// observable 把普通的数据变成可观察的数据
// 利用 Object.defineProperty(o, propertyKey, attributes)，不支持监控数组，只能监控已有的属性 
// 或 new Proxy(target, handler)
const o = observable({name: 'test', children: {name: 'child'}});
console.dir(o);

// 自动运行，会先运行一次，打印test
// 属性的值变化后，会执行一次，打印hello
autorun(() => {
  console.log(o.name);
})

// 属性变化
o.name = 'hello';
o.children.name = 'world'