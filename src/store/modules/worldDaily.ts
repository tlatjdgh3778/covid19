// worldDaily module
import axios from "axios";
import produce from "immer";
import { worldDaily } from "utils/constant";
import { Dispatch } from "redux";

// actionTypes
const FETCH_WORLD_DAILY_REQUEST = "worldDaily/FETCH_WORLD_DAILY_REQUEST" as const;
const FETCH_WORLD_DAILY_SUCCESS = "worldDaily/FETCH_WORLD_DAILY_SUCCESS" as const;
const FETCH_WORLD_DAILY_FAILURE = "worldDaily/FETCH_WORLD_DAILY_FAILURE" as const;

// action creator
export const fetchWorldDailyRequest = () => {
    return {
        type: FETCH_WORLD_DAILY_REQUEST,
    };
};

export const fetchWorldDailySuccess = (data: object[]) => {
    return {
        type: FETCH_WORLD_DAILY_SUCCESS,
        payload: data,
    };
};

export const fetchWorldDailyFailure = (err: string) => {
    return {
        type: FETCH_WORLD_DAILY_FAILURE,
        payload: err,
    };
};
// 모든 액션 객체들에 대한 타입
type WorldDailyAction =
    | ReturnType<typeof fetchWorldDailyRequest>
    | ReturnType<typeof fetchWorldDailySuccess>
    | ReturnType<typeof fetchWorldDailyFailure>;

export const fetchWorldDailyData = () => {
    return async (dispatch: Dispatch<WorldDailyAction>) => {
        dispatch(fetchWorldDailyRequest());
        await axios
            .get(worldDaily)
            .then((response) => {
                dispatch(fetchWorldDailySuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchWorldDailyFailure(err.message));
            });
    };
};

// reducer
// 모듈에서 관리할 상태의 타입
type WorldDailyState = {
    dailyData: {
        loading: boolean;
        err: string;
        data: object[];
    };
};

const initialState: WorldDailyState = {
    dailyData: {
        loading: false,
        err: "",
        data: [],
    },
};

export default function reducer(
    state: WorldDailyState = initialState,
    action: WorldDailyAction
): WorldDailyState {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCH_WORLD_DAILY_REQUEST:
                draft.dailyData.loading = true;
                break;
            case FETCH_WORLD_DAILY_SUCCESS:
                draft.dailyData.loading = false;
                draft.dailyData.data = action.payload;
                break;
            case FETCH_WORLD_DAILY_FAILURE:
                draft.dailyData.loading = false;
                draft.dailyData.data = [];
                draft.dailyData.err = action.payload;
                break;
            default:
                break;
        }
    });
}
