// header头
import React , { Component } from "react";
import resType from "../utils/resType"

class Header extends Component {
	render() {
		const { onClick } = this.props ;

		return (
			<div id="TalionNav">
				<header className="TalionNav">
					<div className="TalionNav-primary">
						<a href="/"><h1>豆瓣</h1></a>
						<nav>
							<ul>
								<li><a href="javascript:void(0);" onClick={ () => onClick(resType.MOVIE) } style={{color: '#2384E8'}}>电影</a></li>
								<li><a href="javascript:void(0);" onClick={ () => onClick(resType.BOOK) }  style={{color: '#9F7860'}}>图书</a></li>
								<li><a href="/status" style={{color: '#E4A813'}}>广播</a></li>
								<li><a href="/group" style={{color: '#2AB8CC'}}>小组</a></li>
							</ul>
							<span className=""></span>
						</nav>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;

