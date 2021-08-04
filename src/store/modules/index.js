// rootReducer
import { combineReducers } from "redux";
import mode from "./mode";
import menu from "./menu";
import korea from "./korea";
import world from "./world";
import state from "./state";
import worldDaily from "./worldDaily";

export default combineReducers({
    mode,
    menu,
    korea,
    world,
    state,
    worldDaily,
});
