import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

// 루트 리듀서의 반환값을 유추
// 이 타입을 다른 컴포넌트에서 불러와 사용
export type RootState = ReturnType<typeof rootReducer>;

export default store;
