import {observable, action} from 'mobx';

class Store {
  @observable num;
  get type() {
    return this.num % 2 ? '奇数' : '偶数'
  }
  @action
  add() {
    this.num += 1;
  }
  constructor() {
    this.num = 2;
  }
}

let store = new Store()

export default store;