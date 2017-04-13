import { movieActionTypes } from "../utils/actionType";

const BASEURL = "http://localhost:8001";
const APIS = {
	getHotMovies: `${BASEURL}/movie/getHotMovies`
};

export default {
	// 获取热门电影
	getHotMovies(dispatch, getState) {
		// 接口请求前action 
		dispatch({
			type: movieActionTypes.FETCH_HOTMOVIE_REQUEST,
			msg:"数据请求中，请耐心等待..."
		});

		fetch(APIS.getHotMovies).then(response => {
			return response.json();
		}).then(data => {
			if(data.state){
				dispatch({
					type: movieActionTypes.FETCH_HOTMOVIE_SUCCESS,
					hotMoviesList: data.movieList
				});
			}
		}).catch(e => {
			// 失败
			dispatch({
				type: movieActionTypes.FETCH_HOTMOVIE_FAILURE,
				msg: e
			});
		});
	}
}