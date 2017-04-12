// 图书item
import React, { Component } from "react";
import style from "../../../public/css/home.css";

class BookItem extends Component {
	render() {
		let { poster, name, itemClick } = this.props;

		return (
			<li className={style.item +' '+style['item__book']}>
				<a href="javascript:void(0);" onClick={ () => itemClick() }>
					<div className={style['item-poster']} style={{backgroundImage : 'url('+ poster +')' }}></div>
					<span className={style['item-title']}>{ name }</span>
					<div className={style['item-rating']}>
						<div className={style.rank}>
							<span className={style['rating-stars']} data-rating="4.7">
								<span className={style['rating-star']+' '+style['rating-star-small-full']}></span>
								<span className={style['rating-star']+' '+style['rating-star-small-full']}></span>
								<span className={style['rating-star']+' '+style['rating-star-small-full']}></span>
								<span className={style['rating-star']+' '+style['rating-star-small-full']}></span>
								<span className={style['rating-star']+' '+style['rating-star-small-full']}></span>
							</span> 
							<span>9.3</span>
						</div>
					</div>
				</a>
			</li>
		);
	}
}

export default BookItem ;