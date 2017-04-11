// 分类浏览item
import React, { Component } from "react" ;
import { connect } from "react-redux" ;

class ClassBrowseItem extends Component {
	render() {
		let { title, link, onClick} = this.props ;

		return (
			<li><a href="javascript:void(0)" onClick={ ()=> onClick(link) }>{ title }<span></span></a></li>
		);
	}
}

export default connect(state => state, dispatch => {
	return {
		onClick : (link) => {
			console.log(link + '被点击..');
		}
	};
})(ClassBrowseItem);