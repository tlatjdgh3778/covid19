// state module
import produce from "immer";

// actionTypes
const CHANGE_STATE = "state/CHANGE_STATE";

// action creator
export const changeState = (state: string) => {
    return {
        type: CHANGE_STATE,
        payload: state,
    };
};

// 모든 액션 객체들에 대한 타입
type StateAction = ReturnType<typeof changeState>;

// reducer
// 모듈에서 관리할 상태의 타입
type StateState = {
    currentState: string;
};

const initialState: StateState = {
    currentState: "확진환자",
};

export default function reducer(state: StateState = initialState, action: StateAction): StateState {
    return produce(state, (draft) => {
        switch (action.type) {
            case CHANGE_STATE:
                draft.currentState = action.payload;
                break;
            default:
                break;
        }
    });
}
