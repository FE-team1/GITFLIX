const initialState = 0;

export const INCREMENT = "INCREMENT";

//  매개변수 안에 = 이들어가면, 어떠한 값도 들어가지않으며 기본값 세팅
const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + action.payload;
        default:
            return state;
    }
}

export default countReducer;