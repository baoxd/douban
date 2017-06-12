// 更多图书
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import { Link } from "react-router-dom";
import { fictitiousBooks, realityBooks } from "../utils/staticData";

import style from "../../../public/css/more.css";

class MoreBook extends Component {
	getBookList(books) {
		let 	lis = [],
			tmpArr;

		for(let i = 0 ; i < 3; i++){
			tmpArr = books.map(function(book, index){
				return (
					<Link to={"/book/detail/"+index} className={ style.item } key={ (i + 1) * 6 + index }>
						<div className={ style.cover }>
							<div className={ style.wp + ' ' + style['ratio3_4']}>
								<img src={ book.poster } data-x="177" data-y="179" className={ style['img-show'] } />
							</div>
						</div>
						<div className={ style.info }>
							<h3>{ book.name } </h3>
							<p className={ style.rank }>
								<span className={ style['rating-stars'] } data-rating="4.1">
									<span className={ style['rating-star'] +' '+ style['rating-star-small-full'] }></span>
									<span className={ style['rating-star'] +' '+ style['rating-star-small-full'] }></span>
									<span className={ style['rating-star'] +' '+ style['rating-star-small-full'] }></span>
									<span className={ style['rating-star'] +' '+ style['rating-star-small-full'] }></span>
									<span className={ style['rating-star'] +' '+ style['rating-star-small-gray'] }></span>
								</span> <span>8.2</span>
							</p>
							<p className={ style.meta }>[美] 安妮特·西蒙斯（Annette Simmons）/后浪丨江西人民出版社/2017-3</p>
							<cite></cite>
						</div>
					</Link>
				);
			});
			lis.push(...tmpArr);
		}
		return lis;
	}

	render() {
		let { match } = this.props,
			lis ,
			resArr,
			title;

		// 更多虚构图书
		if(match.url == "/book/hotfiction"){
			title = "最受关注图书｜虚构类";
			resArr = fictitiousBooks ;
		}else if(match.url == "/book/hotnonfiction"){
			title = "最受关注图书｜非虚构类";
			resArr = realityBooks;
		}

		lis = this.getBookList(resArr);

		return (
			<div>
				<Header />
				<div id="app" className={style.app}>
					<h1>{ title }</h1>
					<section id="list" className={ style.list }>
						{ lis }
					</section>
				</div>
			</div>
		);
	}
}

// export default connect()(MoreBook);
export default MoreBook;