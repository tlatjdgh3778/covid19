// world module
import axios from "axios";
import produce from "immer";
import { worldUrl, countriesUrl } from "utils/constant";
import { Dispatch } from "redux";

// actionTypes
const FETCH_WORLD_REQUEST = "world/FETCH_WORLD_REQUEST" as const;
const FETCH_WORLD_SUCCESS = "world/FETCH_WORLD_SUCCESS" as const;
const FETCH_WORLD_FAILURE = "world/FETCH_WORLD_FAILURE" as const;

// action creator
export const fetchWorldRequest = (value: string) => {
    return {
        type: FETCH_WORLD_REQUEST,
        value,
    };
};

export const fetchWorldSuccess = (data: object[], value: string) => {
    return {
        type: FETCH_WORLD_SUCCESS,
        payload: data,
        value,
    };
};

export const fetchWorldFailure = (err: string, value: string) => {
    return {
        type: FETCH_WORLD_FAILURE,
        payload: err,
        value,
    };
};
// 모든 액션 객체들에 대한 타입
type WorldAction =
    | ReturnType<typeof fetchWorldRequest>
    | ReturnType<typeof fetchWorldSuccess>
    | ReturnType<typeof fetchWorldFailure>;

export const fetchWorldCountriesData = () => {
    return async (dispatch: Dispatch<WorldAction>) => {
        dispatch(fetchWorldRequest("countries"));
        await axios
            .get(countriesUrl)
            .then((response) => {
                dispatch(fetchWorldSuccess(response.data, "countries"));
            })
            .catch((err) => {
                dispatch(fetchWorldFailure(err.message, "countries"));
            });
    };
};

export const fetchWorldData = () => {
    return async (dispatch: Dispatch<WorldAction>) => {
        fetchWorldCountriesData();
        dispatch(fetchWorldRequest("world"));
        await axios
            .get(worldUrl)
            .then((response) => {
                dispatch(fetchWorldSuccess(response.data, "world"));
            })
            .catch((err) => {
                dispatch(fetchWorldFailure(err.message, "world"));
            });
    };
};

// reducer
// 모듈에서 관리할 상태의 타입
type WorldState = {
    worldData: {
        loading: boolean;
        err: string;
        data: object[];
    };
    countriesData: {
        loading: boolean;
        err: string;
        data: object[];
    };
};

const initialState: WorldState = {
    worldData: {
        loading: true,
        err: "",
        data: [],
    },
    countriesData: {
        loading: true,
        err: "",
        data: [],
    },
};

export default function reducer(state: WorldState = initialState, action: WorldAction): WorldState {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCH_WORLD_REQUEST:
                if (action.value === "world") {
                    draft.worldData.loading = true;
                    break;
                } else {
                    draft.countriesData.loading = true;
                    break;
                }
            case FETCH_WORLD_SUCCESS:
                if (action.value === "world") {
                    draft.worldData.loading = false;
                    draft.worldData.data = action.payload;
                    break;
                } else {
                    draft.countriesData.loading = false;
                    draft.countriesData.data = action.payload;
                    break;
                }
            case FETCH_WORLD_FAILURE:
                if (action.value === "world") {
                    draft.worldData.loading = false;
                    draft.worldData.data = [];
                    draft.worldData.err = action.payload;
                    break;
                } else {
                    draft.countriesData.loading = false;
                    draft.countriesData.data = [];
                    draft.countriesData.err = action.payload;
                    break;
                }
            default:
                break;
        }
    });
}
