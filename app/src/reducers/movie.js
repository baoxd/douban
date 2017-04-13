import { movieActionTypes } from "../utils/actionType";

// 初始state
let initSate = {
	hotMoviesLoading: true,
	hotMoviesList:[],
	hotMoviesFailMsg:''
};

const movie = (state = initSate , action) => {
	switch(action.type) {
		case movieActionTypes.preGetHotMovies:
			return {
				...state,
				hotMoviesLoading: true
			}
		case movieActionTypes.getHotMovies:
			return {
				...state,
				hotMoviesList: action.hotMoviesList,
				hotMoviesLoading:false,
				hotMoviesFailMsg:''
			}
		case movieActionTypes.failGetHotMovies:
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