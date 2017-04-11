// 电影横向列表
import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component {
	render() {
		let {movies, title, onClick, moreClick } = this.props ;
		let movieItems = movies.map(function(movie, index){
			return (
				<li className="item item__movie" key={ index }>
					<a href="javascript:void(0);" onClick={ onClick }>
						<div className="item-poster" style={{backgroundImage : 'url('+ movie.poster +')' }}></div>
							<span className="item-title">{ movie.name }</span>
							<div className="item-rating">
								<div className="rank">
									<span className="rating-stars" data-rating="3.3">
										<span className="rating-star rating-star-small-full"></span>
										<span className="rating-star rating-star-small-full"></span>
										<span className="rating-star rating-star-small-full"></span>
										<span className="rating-star rating-star-small-gray"></span>
										<span className="rating-star rating-star-small-gray"></span>
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
						<a href="javascript:void(0);" onClick={ moreClick }>更多</a>
				</header>
				<div className="section-content">
					<ul className="row items">
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