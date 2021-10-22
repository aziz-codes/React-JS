import {useSelector,useDispatch} from 'react-redux';
function Data()
{
    const mystate=useSelector((state)=>state.changeTheNumber);
    return <h3>{mystate}</h3>
}
export default Data;