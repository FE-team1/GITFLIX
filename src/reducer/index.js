import { combineReducers } from "redux";
import count from "./count";

export const rootReducer = combineReducers({
    /* ...user,todo, ...count */
    /* 무작전 전역상태? => X (고민해보기) */
    /* 전역상태는 캐싱 및 랜더링 문제가 발생 */
    count,
    /* rootReducer에 등록한 키 값! */
})