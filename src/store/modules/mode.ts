// mode module
import produce from "immer";

// actionTypes
const CHANGE_MODE = "mode/CHANGE_MODE" as const;

// action creator
export const changeMode = () => {
    return {
        type: CHANGE_MODE,
    };
};

// 모든 액션 객체들에 대한 타입
type ModeAction = ReturnType<typeof changeMode>;

// reducer
// 모듈에서 관리할 상태의 타입
type ModeState = {
    isDark: boolean;
};

const initialState: ModeState = {
    isDark: false,
};

export default function reducer(state: ModeState = initialState, action: ModeAction): ModeState {
    return produce(state, (draft) => {
        switch (action.type) {
            case CHANGE_MODE:
                draft.isDark = !draft.isDark;
                break;
            default:
                break;
        }
    });
}
