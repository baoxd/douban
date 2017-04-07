const header = (state = {type: "movie"}, action) => {
	switch (action.type) {
		case "MOVIE":
			return {
				type:"movie"
			};
		case "BOOK":
			return {
				type:"book"
			};
		default:
			return state;
	}
}

export default header;