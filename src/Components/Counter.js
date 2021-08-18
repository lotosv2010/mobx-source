import {useState} from 'react';
import '../mobx/index';
function Counter() {
  const [state, setState] = useState({number: 0});
  
  const handleClick = () => {
    setState({number: state.number + 1})
  }

  // console.log(state);

  return <div>
    <p>{state.number}</p>
    <button onClick={handleClick}>+</button>
  </div>
}
export default Counter;