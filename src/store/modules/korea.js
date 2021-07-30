// korea Data module
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const koreaUrl = `https://api.corona-19.kr/korea/?serviceKey=${API_KEY}`;
export const cityUrl = `https://api.corona-19.kr/korea/country/new/?serviceKey=${API_KEY}`;

// actionTypes
export const FETCH_KOREA_REQUEST = "korea/FETCH_KOREA_REQUEST";
export const FETCH_KOREA_SUCCESS = "korea/FETCH_KOREA_SUCCESS";
export const FETCH_KOREA_FAILURE = "korea/FETCH_KOREA_FAILURE";

// action creator
export const fetchKoreaRequest = (value) => {
    return {
        type: FETCH_KOREA_REQUEST,
        value,
    };
};

export const fetchKoreaSuccess = (data, value) => {
    return {
        type: FETCH_KOREA_SUCCESS,
        payload: data,
        value,
    };
};

export const fetchKoreaFailure = (err, value) => {
    return {
        type: FETCH_KOREA_FAILURE,
        payload: err,
        value,
    };
};
const fetchKoreaCityData = () => {
    return (dispatch) => {
        dispatch(fetchKoreaRequest("city"));
        axios
            .get(cityUrl)
            .then((response) => {
                dispatch(fetchKoreaSuccess(response.data, "city"));
            })
            .catch((err) => {
                dispatch(fetchKoreaFailure(err.message, "city"));
            });
    };
};

export const fetchKoreaData = () => {
    return (dispatch) => {
        dispatch(fetchKoreaCityData());
        dispatch(fetchKoreaRequest("korea"));
        axios
            .get(koreaUrl)
            .then((response) => {
                dispatch(fetchKoreaSuccess(response.data, "korea"));
            })
            .catch((err) => {
                dispatch(fetchKoreaFailure(err.message, "korea"));
            });
    };
};

// reducer
const initialState = {
    koreaData: {
        loading: true,
        err: "",
        data: [],
    },
    cityData: {
        loading: true,
        err: "",
        data: [],
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_KOREA_REQUEST:
            if (action.value === "korea") {
                return {
                    ...state,
                    koreaData: {
                        ...state.koreaData,
                        loading: true,
                    },
                };
            } else {
                return {
                    ...state,
                    cityData: {
                        ...state.cityData,
                        loading: true,
                    },
                };
            }
        /* falls through */
        case FETCH_KOREA_SUCCESS:
            if (action.value === "korea") {
                return {
                    ...state,
                    koreaData: {
                        ...state.koreaData,
                        loading: false,
                        data: action.payload,
                    },
                };
            } else {
                return {
                    ...state,
                    cityData: {
                        ...state.cityDate,
                        loading: false,
                        data: action.payload,
                    },
                };
            }
        /* falls through */
        case FETCH_KOREA_FAILURE:
            if (action.value === "korea") {
                return {
                    ...state,
                    koreaData: {
                        ...state.koreaData,
                        loading: false,
                        data: [],
                        err: action.payload,
                    },
                };
            } else {
                return {
                    ...state,
                    cityData: {
                        ...state.cityDate,
                        loading: false,
                        data: [],
                        err: action.payload,
                    },
                };
            }
        /* falls through */
        default:
            return state;
    }
}
