import { movieActionTypes } from "../utils/actionType";

// 初始state
let initSate = {
	hotMoviesLoading: true,
	hotMoviesList:[],
	hotMoviesFailMsg:''
};

const movie = (state = initSate , action) => {
	switch(action.type) {
		case movieActionTypes.FETCH_HOTMOVIE_REQUEST:
			return {
				...state,
				hotMoviesLoading: true
			}
		case movieActionTypes.FETCH_HOTMOVIE_SUCCESS:
			return {
				...state,
				hotMoviesList: action.hotMoviesList,
				hotMoviesLoading:false,
				hotMoviesFailMsg:''
			}
		case movieActionTypes.FETCH_HOTMOVIE_FAILURE:
			return {
				...state,
				hotMoviesList: [],
				hotMoviesFailMsg:action.msg,
				hotMoviesLoading:false
			}
		default:
			return initSate;
	}
	return initSate;
}

export default movie;