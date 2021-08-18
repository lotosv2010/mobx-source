let nowFn = null; // 当前的 autorun 方法
let counter = 0;
/**
 * 收集 autorun 的方法，并且创建当前属性和 autorun 的关系
 */
class Reaction {
  constructor() {
    this.id = ++counter;
    this.store = {} // 存储当前可观察对象对应的 nowFn => {id: [nowFn]}
  }
  static start (handler) {
    nowFn = handler;
  }
  static end () {
    nowFn = null;
  }
  collect() {
    // 当前有需要绑定的函数，才进行绑定
    // console.log('nowFn---', nowFn)
    if(nowFn) {
      this.store[this.id] = this.store[this.id] || []
      this.store[this.id].push(nowFn);
      console.log(`this.store[${this.id}]`, this.store[this.id])
    }
  }
  run() {
    if(this.store[this.id]) {
      this.store[this.id].forEach(w => {
        w()
      });
    }
  }
}

export default Reaction;