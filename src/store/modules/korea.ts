// korea Data module
import axios from "axios";
import produce from "immer";
import { koreaUrl, cityUrl } from "utils/constant";
import { Dispatch } from "redux";
import { KoreaCityDataType, KoreaDataType, koreaData, koreaCityData } from "utils/types/koreaData";

// actionTypes
const FETCH_KOREA_REQUEST = "korea/FETCH_KOREA_REQUEST" as const;
const FETCH_KOREA_SUCCESS = "korea/FETCH_KOREA_SUCCESS" as const;
const FETCH_KOREA_FAILURE = "korea/FETCH_KOREA_FAILURE" as const;

// action creator
export const fetchKoreaRequest = (value: string) => {
    return {
        type: FETCH_KOREA_REQUEST,
        value,
    };
};

export const fetchKoreaSuccess = (data: any, value: string) => {
    return {
        type: FETCH_KOREA_SUCCESS,
        payload: data,
        value,
    };
};

export const fetchKoreaFailure = (err: string, value: string) => {
    return {
        type: FETCH_KOREA_FAILURE,
        payload: err,
        value,
    };
};

// 모든 액션 객체들에 대한 타입
type KoreaAction =
    | ReturnType<typeof fetchKoreaRequest>
    | ReturnType<typeof fetchKoreaSuccess>
    | ReturnType<typeof fetchKoreaFailure>;

export const fetchKoreaCityData = () => {
    return async (dispatch: Dispatch<KoreaAction>) => {
        dispatch(fetchKoreaRequest("city"));
        await axios
            .get<KoreaCityDataType>(cityUrl)
            .then((response) => {
                dispatch(fetchKoreaSuccess(response.data, "city"));
            })
            .catch((err) => {
                dispatch(fetchKoreaFailure(err.message, "city"));
            });
    };
};

export const fetchKoreaData = () => {
    return async (dispatch: Dispatch<KoreaAction>) => {
        dispatch(fetchKoreaRequest("korea"));
        await axios
            .get<KoreaDataType>(koreaUrl)
            .then((response) => {
                dispatch(fetchKoreaSuccess(response.data, "korea"));
            })
            .catch((err) => {
                dispatch(fetchKoreaFailure(err.message, "korea"));
            });
    };
};

// reducer
// 모듈에서 관리할 상태의 타입

type KoreaState = {
    koreaData: {
        loading: boolean;
        err: string;
        data: KoreaDataType;
    };
    cityData: {
        loading: boolean;
        err: string;
        data: KoreaCityDataType;
    };
};

const initialState: KoreaState = {
    koreaData: {
        loading: true,
        err: "",
        data: koreaData,
    },
    cityData: {
        loading: true,
        err: "",
        data: koreaCityData,
    },
};

export default function reducer(state: KoreaState = initialState, action: KoreaAction): KoreaState {
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
                    draft.koreaData.data = koreaData;
                    draft.koreaData.err = action.payload;
                    break;
                } else {
                    draft.cityData.loading = false;
                    draft.cityData.data = koreaCityData;
                    draft.cityData.err = action.payload;
                    break;
                }
            default:
                break;
        }
    });
}
