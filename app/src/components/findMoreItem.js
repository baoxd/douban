// 发现更多item
import React, { Component } from "react";
import { connect } from "react-redux";

class FindMoreItem extends Component {
	render() {
		let {title , onClick, color, link}  = this.props ;

		return (
			<li style={{borderColor: color}} >
				<a href="javascript:void(0);" onClick= {() => onClick(link)} style={{color: color}}>
					{ title }
				</a>
			</li>
		) ;
	}
}

export default connect(state => state, dispatch => {
	return {
		onClick : (link) => {
			console.log(link + '被点击..');
		}
	};
})(FindMoreItem);