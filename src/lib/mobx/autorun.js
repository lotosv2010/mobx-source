import Reaction from './reaction';

function autorun(handler) {
  Reaction.start(handler); // 保存 handler 函数
  handler(); // 调研 handler 会触发 get 属性
  Reaction.end(); // 清空
}
export default autorun;