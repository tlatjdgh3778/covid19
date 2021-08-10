// korea Data module
import axios from "axios";
import produce from "immer";
import { koreaUrl, cityUrl } from "utils/constant";

// actionTypes
const FETCH_KOREA_REQUEST = "korea/FETCH_KOREA_REQUEST";
const FETCH_KOREA_SUCCESS = "korea/FETCH_KOREA_SUCCESS";
const FETCH_KOREA_FAILURE = "korea/FETCH_KOREA_FAILURE";

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
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCH_KOREA_REQUEST:
                if (action.value === "korea") {
                    draft.koreaData.loading = true;
                    break;
                } else {
                    draft.cityData.loading = true;
                    break;
                }
            case FETCH_KOREA_SUCCESS:
                if (action.value === "korea") {
                    draft.koreaData.loading = false;
                    draft.koreaData.data = action.payload;
                    break;
                } else {
                    draft.cityData.loading = false;
                    draft.cityData.data = action.payload;
                    break;
                }
            case FETCH_KOREA_FAILURE:
                if (action.value === "korea") {
                    draft.koreaData.loading = false;
                    draft.koreaData.data = [];
                    draft.koreaData.err = action.payload;
                    break;
                } else {
                    draft.cityData.loading = false;
                    draft.cityData.data = [];
                    draft.cityData.err = action.payload;
                    break;
                }
            default:
                break;
        }
    });
}
