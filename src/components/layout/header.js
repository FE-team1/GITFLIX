import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from '../reducer/count';

const Count = () => {
    /* selector: 내가 원하는 상태를 가지고 오겠다 => redux는 여러가지 전역 상태를 한 번에 관리하므로 그 중에서 원하는 것을 선택 */
    const count = useSelector((state) => state.count); // 상태생성
    const dispatch = useDispatch();

    const onPressIncrement = () => {
        dispatch({
            type: INCREMENT,
            payload: 1,
        });
    };

    // 0
    return (
        <div>
            {count}
            <button onClick={onPressIncrement}>+</button>
        </div>
    );
};
export default Count;
