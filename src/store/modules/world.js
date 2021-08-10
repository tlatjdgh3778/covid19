// world module
import axios from "axios";
import produce from "immer";
import { worldUrl, countriesUrl } from "utils/constant";

// actionTypes
const FETCH_WORLD_REQUEST = "world/FETCH_WORLD_REQUEST";
const FETCH_WORLD_SUCCESS = "world/FETCH_WORLD_SUCCESS";
const FETCH_WORLD_FAILURE = "world/FETCH_WORLD_FAILURE";

// action creator
export const fetchWorldRequest = (value) => {
    return {
        type: FETCH_WORLD_REQUEST,
        value,
    };
};

export const fetchWorldSuccess = (data, value) => {
    return {
        type: FETCH_WORLD_SUCCESS,
        payload: data,
        value,
    };
};

export const fetchWorldFailure = (err, value) => {
    return {
        type: FETCH_WORLD_FAILURE,
        payload: err,
        value,
    };
};

export const fetchWorldCountriesData = () => {
    return (dispatch) => {
        dispatch(fetchWorldRequest("countries"));
        axios
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
    return (dispatch) => {
        dispatch(fetchWorldCountriesData());
        dispatch(fetchWorldRequest("world"));
        axios
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
const initialState = {
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

export default function reducer(state = initialState, action) {
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
