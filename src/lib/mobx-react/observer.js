import {autorun} from '../mobx';

export default function observer(target) {
  const cwm = target.prototype.componentWillMount;
  target.prototype.componentWillMount = function() {
    cwm && cwm.call(this);
    autorun(() => { // 只要依赖的数据更新了，就调用强制更新的操作
      this.render();
      this.forceUpdate();
    })
  }
}