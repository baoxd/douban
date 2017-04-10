import { headerActionTypes } from "../utils/actionType";

export default {
	switchType(type) {
		return {
			type: headerActionTypes.switchType,
			value: type
		}
	}
}