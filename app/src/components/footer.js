import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../../../public/css/home.css";

class Footer extends Component {
	render() {
		return (
			<div className={style['download-app']}>
				<div className={style.info}>
					<img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width="48" />
					<div className={style['info-content']}>
						<strong>豆瓣</strong>
						<div>我们的精神角落</div>
					</div>
				</div>
				<a href="https://www.douban.com/doubanapp/card/log?category=movie_home&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1" rel="nofollow">
					去 App Store 免费下载 iOS 客户端
				</a>
			</div>
		);
	}
}

export default Footer;