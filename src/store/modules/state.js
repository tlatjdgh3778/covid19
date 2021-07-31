// state module

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
    switch (action.type) {
        case CHANGE_STATE:
            return {
                currentState: action.payload,
            };
        default:
            return state;
    }
}
