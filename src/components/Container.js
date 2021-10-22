import {useSelector,useDispatch} from 'react-redux';
import { incNumber,decNumber } from '../actions';
function Container()
{
    const mystate=useSelector((state)=>state.changeTheNumber);
    const dispatch=useDispatch();
     return (
    <div>
    <div className='container-fluid justify-content-center'>
    <h2 className='text-center'>Increment or Decrement</h2>
    <div className='d-flex justify-content-center'>
        <button className='btn btn-success' onClick={()=>{dispatch(incNumber())}}>+</button>
        <button className='btn btn-primary'>{mystate}</button>
        <button className='btn btn-secondary' onClick={()=>{dispatch(decNumber())}}>-</button>
    </div>
    </div>
 </div>
);
}
export default Container;