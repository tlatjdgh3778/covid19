// world module
import axios from "axios";

export const worldUrl = "https://disease.sh/v3/covid-19/all";
export const countriesUrl = "https://disease.sh/v3/covid-19/countries";

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
    switch (action.type) {
        case FETCH_WORLD_REQUEST:
            if (action.value === "world") {
                return {
                    ...state,
                    worldData: {
                        ...state.worldData,
                        loading: true,
                    },
                };
            } else {
                return {
                    ...state,
                    countriesData: {
                        ...state.countriesData,
                        loading: true,
                    },
                };
            }
        case FETCH_WORLD_SUCCESS:
            if (action.value === "world") {
                return {
                    ...state,
                    worldData: {
                        ...state.worldData,
                        loading: false,
                        data: action.payload,
                    },
                };
            } else {
                return {
                    ...state,
                    countriesData: {
                        ...state.countriesData,
                        loading: false,
                        data: action.payload,
                    },
                };
            }
        case FETCH_WORLD_FAILURE:
            if (action.value === "world") {
                return {
                    ...state,
                    worldData: {
                        ...state.worldData,
                        loading: false,
                        data: [],
                        err: action.payload,
                    },
                };
            } else {
                return {
                    ...state,
                    countriesData: {
                        ...state.countriesData,
                        loading: false,
                        data: [],
                        err: action.payload,
                    },
                };
            }
        default:
            return state;
    }
}
