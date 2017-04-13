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
			type: movieActionTypes.preGetHotMovies,
			msg:"数据请求中，请耐心等待..."
		});

		fetch(APIS.getHotMovies)
			.then(response => {
				// 接口请求成功
				dispatch({
					type: movieActionTypes.getHotMovies ,
					hotMoviesList: response.json(),
				});
			}, e => {
				// 失败
				dispatch({
					type: movieActionTypes.failGetHotMovies,
					msg: e,
				});
			});
	}
}