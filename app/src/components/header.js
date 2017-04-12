// 主页-header头
import React , { Component } from "react";
import resType from "../utils/resType";
import { connect } from "react-redux";
import headerAction from "../actions/headerAction";
import { Link } from "react-router-dom";

import style from "../../../public/css/base.css";


class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { onClick } = this.props ;

		return (
			<div id="TalionNav">
				<header className={style.TalionNav}>
					<div className={style['TalionNav-primary']}>
						<a href="/"><h1>豆瓣</h1></a>
						<nav>
							<ul>
								<li>
									{/*  <a href="javascript:void(0);" onClick={ () => onClick(resType.movie) }> */}
									<Link to="/movie"  style={{color: '#2384E8'}}>电影</Link>
								</li>
								<li>
									{/* <a href="javascript:void(0);" onClick={ () => onClick(resType.book) } > */}
									<Link to="/book" style={{color: '#9F7860'}}>图书</Link></li>
								<li><a href="javascript:void(0);" style={{color: '#E4A813'}}>广播</a></li>
								<li><a href="javascript:void(0);" style={{color: '#2AB8CC'}}>小组</a></li>
							</ul>
							<span className=""></span>
						</nav>
					</div>
				</header>
			</div>
		);
	}
}

export default connect( state=>state, dispatch=> {
	return {
		onClick : (resType) => {
			dispatch( headerAction.switchType( resType ) );
		}
	}
})(Header);

