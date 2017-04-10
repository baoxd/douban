import { headerActionTypes } from "../utils/actionType";

const header = (state = {currResType: "movie"}, action) => {
	switch (action.type) {
		case headerActionTypes.switchType :
			return {
				currResType: action.value
			};
		default:
			return state;
	}
}

export default header;