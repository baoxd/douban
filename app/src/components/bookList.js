// 图书列表
import React, { Component } from "react";
import { connect } from "react-redux";
import BookItem from "./bookItem";
import style from "../../../public/css/home.css";

class BookList extends Component {
	render() {
		let { books , title, itemClick, moreClick } = this.props;
		let bookItems = books.map(function(book, index){
			return <BookItem poster={ book.poster } name={ book.name } itemClick={ itemClick } key={ index }/>
		});

		return (
			<section id="book_fiction">
				<header>
					<h2>{ title }</h2>
					<a href="javascript:void(0);" onClick={ () => moreClick() } >更多</a>
				</header>
				<div className={style['section-content']}>
					<ul className={style.row +' '+ style.items}>
						{ bookItems }
					</ul>
				</div>
			</section>
		) ;
	}
}

export default connect(state => state , dispatch => {
	return {
		itemClick: (bookId) => {
			console.log('一个图书被点击，将跳转到该书籍的详情页.');
		}
	};
})(BookList);