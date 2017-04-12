// 主页
import React , { Component } from "react" ;
// import * as ReactRedux from "react-redux";
import { connect }  from "react-redux";
import Header from "./header";
import Content from "./content";
import headerAction from "../actions/headerAction";
import resType from "../utils/resType" ;

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		let { match, switchType, history } = this.props;

		if(match.url == "/book"){
			switchType(resType.book);
		}else if(match.url == "/movie"){
			switchType(resType.movie);
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		)
	}
}

export default connect(state=>state, dispatch => {
	return {
		switchType: (resType) => {
			dispatch( headerAction.switchType( resType ) );
		}
	};
})(Home);