// menu module
import produce from "immer";

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
    return produce(state, (draft) => {
        switch (action.type) {
            case TOGGLE_MENU:
                draft.isOpen = !draft.isOpen;
                break;
            default:
                break;
        }
    });
}
