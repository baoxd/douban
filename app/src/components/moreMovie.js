// 更多电影
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./header";
import { hotMovies } from "../utils/staticData";

import style from "../../../public/css/more.css";

class MoreMovie extends Component {

	render() {
		let  { match } = this.props,
			lis = [],
			tmpArr,
			title;

		if(match.url == "/movie/hotmore"){
			title = '影院热映' ;

			for(let i = 0 ; i < 5 ; i++){
				tmpArr = hotMovies.map(function(movie, index){
					return (
						<Link to="/movie/detail/{index}" className={ style.item } key={ (i + 1) * 6 + index }>
							<div className={ style.cover }>
								<div className={ style.wp + '  ' +style.ratio3_4 } >
									<img src={ movie.poster } 
										alt={ movie.name } data-x="3945" data-y="2508" className={style['img-show']} style={{width:'100%'}} />
								</div>
							</div>
							<div className={style.info}>
								<h4></h4>
								<h3>攻壳机动队</h3>
								<p className={style.rank}>
									<span className={style['rating-stars']} data-rating="3.3">
										<span className={style['rating-star'] + ' ' + style['rating-star-small-full']}></span>
										<span className={style['rating-star'] + ' ' + style['rating-star-small-full']}></span>
										<span className={style['rating-star'] + ' ' + style['rating-star-small-full']}></span>
										<span className={style['rating-star'] + ' ' + style['rating-star-small-gray']}></span>
										<span className={style['rating-star'] + ' ' + style['rating-star-small-gray']}></span>
									</span> 
									<span>6.6</span>
								</p>
								<p className={style.meta}>鲁伯特·桑德斯/斯嘉丽·约翰逊/皮鲁·埃斯贝克/北野武/动作/科幻/犯罪/2017-04-07(中国大陆)</p>
								<cite></cite>
							</div>
						</Link>
					) ;
				});
				lis.push(...tmpArr);
			}
		}

		return (
			<div>
				<Header />
				<div id="app" className={style.app}>
					<h1>{ title }</h1>
					<section id="list" className={ style.grid }>
						{ lis }
					</section>
				</div>
			</div>
		) ;
	}
}

export default connect()(MoreMovie);