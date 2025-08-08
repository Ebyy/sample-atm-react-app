import { useNavigate } from 'react-router-dom'
import { runExitTask } from './store/reducer'
import { useDispatch } from 'react-redux'

export const CardActionButtons = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleExitClick = () => {
        dispatch(runExitTask(false))
        navigate("/auth")
    }

    return (<>
        <div className='outer-buttons'>
            <div className='outer-buttons-left'>
                <button></button>
                <button></button>
                <button onClick={() => navigate("/withdraw")}></button>
                <button onClick={() => navigate("/deposit")}></button>
            </div>
            <div className='outer-buttons-right'>
                <button></button>
                <button onClick={handleExitClick}></button>
                <button onClick={() => navigate("/balance")}></button>
                <button onClick={() => navigate("/auth")}></button>
            </div>

        </div>
    </>)
}
