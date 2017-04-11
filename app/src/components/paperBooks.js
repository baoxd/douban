// 豆瓣纸书
import React, { Component } from "react";
import { connect } from "react-redux";

class PaperBooks extends Component {
	render() {
		let { onItemClick, books, title } = this.props,
			lis;

		lis = books.map(function(book, index){
			return (
				<li className="item item__market_product_book" key={ index }>
					<a href="https://market.douban.com/book/baiguiyexing">
						<div className="item-poster" style={{backgroundImage : 'url('+ book.poster +')' }}></div>
						<span className="item-title">{ book.name }</span>
						<div className="item-rating">
							<div className="rank">
								<span>¥ { book.price }</span>
							</div>
						</div>
					</a>
				</li>
			);
		});

		return (
			<section id="market_product_book">
				<div id="book_header">
					<header>
						<h2>{ title }</h2>
						<a href="https://market.douban.com/book/">更多</a>
					</header>
					<a href="https://market.douban.com/book/talese" className="promBook">
						<img className="cover" src={'https://qnmob2.doubanio.com/lpic/s29345035.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg'} alt="被仰望与被遗忘的" />
						<div className="content">
							<div className="title">
								<span className="price">¥ 65</span>
								<p className="name">被仰望与被遗忘的</p>
							</div>
							<p className="infoWithoutReviewer">20世纪最伟大的非虚构书写，全世界特稿写作者的典范</p>
						</div>
					</a>
				</div>
				<div className="section-content">
					<ul className="row items">
						{ lis }
					</ul>
				</div>
			</section>
		) ;
	}
}

export default connect(state=>state, dispatch=>{
	return {
		onItemClick: (bookId)=>{
			console.log('进入图书详情页');
		}
	}
})(PaperBooks);