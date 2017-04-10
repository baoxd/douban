// 主页
import React , { Component } from "react" ;
// import * as ReactRedux from "react-redux";
import { connect }  from "react-redux";
import Header from "./header";
import Content from "./content";

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		)
	}
}

export default connect(state=>state)(Home);