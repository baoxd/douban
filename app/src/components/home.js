import React , { Component } from "react" ;
// import * as ReactRedux from "react-redux";
import { connect }  from "react-redux";
import Header from "./header";

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		)
	}
}

export default connect(state=>state)(Home);