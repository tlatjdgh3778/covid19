// mode module

// actionTypes
const CHANGE_MODE = "mode/CHANGE_MODE";

// action creator
export const changeMode = () => {
    return {
        type: CHANGE_MODE,
    };
};

// reducer
const initialState = {
    isDark: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MODE:
            return {
                ...state,
                isDark: !state.isDark,
            };
        default:
            return state;
    }
}
