// menu module

// actionTypes
const TOGGLE_MENU = "menu/TOGGLE_MENU";

// action creator
export const toggleMenu = () => {
    return {
        type: TOGGLE_MENU,
    };
};

// reducer
const initialState = {
    isOpen: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        default:
            return state;
    }
}
