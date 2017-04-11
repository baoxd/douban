// 图书item
import React, { Component } from "react";

class BookItem extends Component {
	render() {
		let { poster, name, itemClick } = this.props;

		return (
			<li className="item item__book">
				<a href="javascript:void(0);" onClick={ () => itemClick() }>
					<div className="item-poster" style={{backgroundImage : 'url('+ poster +')' }}></div>
					<span className="item-title">{ name }</span>
					<div className="item-rating">
						<div className="rank">
							<span className="rating-stars" data-rating="4.7">
								<span className="rating-star rating-star-small-full"></span>
								<span className="rating-star rating-star-small-full"></span>
								<span className="rating-star rating-star-small-full"></span>
								<span className="rating-star rating-star-small-full"></span>
								<span className="rating-star rating-star-small-full"></span>
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