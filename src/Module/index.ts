import { combineReducers } from "redux";
import CountReducer from "./counter";
import ListReducer from "./list";

const rootReducer = combineReducers({
    CountReducer,
    ListReducer,
});

export default rootReducer;

// useSelector로 접근하기위해 필요함.
export type RootState = ReturnType<typeof rootReducer>;
