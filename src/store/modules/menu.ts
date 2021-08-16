// menu module
import produce from "immer";

// actionTypes
const TOGGLE_MENU = "menu/TOGGLE_MENU" as const;

// action creator
export const toggleMenu = () => {
    return {
        type: TOGGLE_MENU,
    };
};
// 모든 액션 객체들에 대한 타입
type MenuAction = ReturnType<typeof toggleMenu>;

// reducer
// 모듈에서 관리할 상태의 타입
type MenuState = {
    isOpen: boolean;
};

const initialState: MenuState = {
    isOpen: false,
};

export default function reducer(state: MenuState = initialState, action: MenuAction): MenuState {
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
