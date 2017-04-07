import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

let createStoreWithMiddleware;
const logger = createLogger({ collapsed: true });

createStoreWithMiddleware =  applyMiddleware(
	thunkMiddleware,
	logger
)(createStore);

// store负责管理所有reducer，module.hot.accept表示支持热更新
export default function configureStore(initialSate) {
	const store = createStoreWithMiddleware(rootReducer, initialSate);
	if (module.hot) {
		module.hot.accept("../reducers", () => {
			const nextRootReducer = require("../reducers/index");
			store.replaceReducer(nextRootReducer);
		})
	}
	return store;
}
