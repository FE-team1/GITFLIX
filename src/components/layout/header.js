import { useReducer } from "react";
import { headerReducer } from "../../reducer/count";

const [header, dispatch] = useReducer(headerReducer, 0);
// reducer 상태 생성 구조분해 할당이므로 이름은 마음대로
// 두번째요소는 dispatch로 하는 것이 좋다.
// dispath: action 즉 객체를 store에 보내는 역할

const onAddCount = () => {
    dispatch({
        // 안에들어있는 값을 객체로 전달하고 그 값이 action이 된다.
        type:"INCREMENT",
        payload:1, //1씩 더해줄거임
    });
    // 커스텀훅을 사용하지않아도 비즈니스 로직을 재사용가능 (비지니스로직 = 사칙연산) => reducer에서 알아서함
    // 코드가 보다 보기 깔끔해짐
    // 언제어디서든 dispatch를 통해서 store에 action을 전달하여 원하는 로직실행시킬 수 있음
}