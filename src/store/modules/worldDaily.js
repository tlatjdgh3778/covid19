// worldDaily module
import axios from "axios";
import { worldDaily } from "utils/constant";

// actionTypes
const FETCH_WORLD_DAILY_REQUEST = "worldDaily/FETCH_WORLD_DAILY_REQUEST";
const FETCH_WORLD_DAILY_SUCCESS = "worldDaily/FETCH_WORLD_DAILY_SUCCESS";
const FETCH_WORLD_DAILY_FAILURE = "worldDaily/FETCH_WORLD_DAILY_FAILURE";

// action creator
export const fetchWorldDailyRequest = () => {
    return {
        type: FETCH_WORLD_DAILY_REQUEST,
    };
};

export const fetchWorldDailySuccess = (data) => {
    return {
        type: FETCH_WORLD_DAILY_SUCCESS,
        payload: data,
    };
};

export const fetchWorldDailyFailure = (err) => {
    return {
        type: FETCH_WORLD_DAILY_FAILURE,
        payload: err,
    };
};

export const fetchWorldDailyData = () => {
    return (dispatch) => {
        dispatch(fetchWorldDailyRequest());
        axios
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
const initialState = {
    dailyData: {
        loading: false,
        data: [],
        err: "",
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WORLD_DAILY_REQUEST:
            return {
                ...state,
                dailyData: {
                    ...state.dailyData,
                    loading: true,
                },
            };
        case FETCH_WORLD_DAILY_SUCCESS:
            return {
                ...state,
                dailyData: {
                    ...state.dailyData,
                    loading: false,
                    data: action.payload,
                },
            };
        case FETCH_WORLD_DAILY_FAILURE:
            return {
                ...state,
                dailyData: {
                    ...state.dailyData,
                    loading: false,
                    err: action.payload,
                },
            };
        default:
            return state;
    }
}
