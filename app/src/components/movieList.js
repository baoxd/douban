// 电影横向列表
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "../../../public/css/home.css";

class MovieList extends Component {
	render() {
		let {movies, title, onClick, morelink } = this.props ;
		let movieItems = movies.map(function(movie, index){
			return (
				<li className={style.item +' '+ style['item__movie']} key={ index }>
					<a href="javascript:void(0);" onClick={ onClick }>
						<div className={style['item-poster']} style={{backgroundImage : 'url('+ movie.poster +')' }}></div>
							<span className={style['item-title']}>{ movie.name }</span>
							<div className={style['item-rating']}>
								<div className={style.rank}>
									<span className={style['rating-stars']} data-rating="3.3">
										<span className={style['rating-star'] + ' '+ style['rating-star-small-full']}></span>
										<span className={style['rating-star'] + ' '+ style['rating-star-small-full']}></span>
										<span className={style['rating-star'] + ' '+ style['rating-star-small-full']}></span>
										<span className={style['rating-star'] + ' '+ style['rating-star-small-gray']}></span>
										<span className={style['rating-star'] + ' '+ style['rating-star-small-gray']}></span>
									</span> 
									<span>6.6</span>
								</div>
							</div>
						</a>
				</li>
			);
		});

		return (
			<section id="movie_showing">
				<header>
					<h2>{ title }</h2>
						<Link to={ morelink }>更多</Link>
				</header>
				<div className={style['section-content']}>
					<ul className={style.row +' '+style['items']}>
						{ movieItems }
					</ul>
				</div>
			</section>
		);
	}
}

export default connect(state => state, dispatch => {
	return {

	};
})(MovieList);