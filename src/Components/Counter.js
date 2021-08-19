import {Component} from 'react';
import {observer, inject} from 'mobx-react';
@inject('store')
@observer
class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    const { store } = this.props;
    return <div>
        <p>{store.num}</p>
        <p>{store.type}</p>
        <button onClick={() => store.add()}>+</button>
      </div>
  }
}
export default Counter;