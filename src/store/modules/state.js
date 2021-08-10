// state module
import produce from "immer";

// actionTypes
const CHANGE_STATE = "state/CHANGE_STATE";

// action creator
export const changeState = (state) => {
    return {
        type: CHANGE_STATE,
        payload: state,
    };
};

// reducer
const initialState = {
    currentState: "확진환자",
};

export default function reducer(state = initialState, action) {
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
