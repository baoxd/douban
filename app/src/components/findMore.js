// 发现更多资源
import React, { Component } from "react";
import { connect } from "react-redux";
import FindMoreItem from "./findMoreItem";

class FindMore extends Component {
	render() {
		let currResType = this.props.header.currResType;

		let movieList = [
			{
				title:"同时入选IMDB250和豆瓣电影250的电影",
				color:"#CC3344",
				link:"https://m.douban.com/doulist/968362/"
			},
			{
				title:"带你进入不正常的世界",
				color:"#2384E8",
				link:"https://m.douban.com/doulist/16002/"
			},
			{
				title:"用电【影】来祭奠逝去的岁月",
				color:"#4F9DED",
				link:"https://m.douban.com/doulist/190343/"
			},
			{
				title:"同时入选IMDB250和豆瓣电影250的电影",
				color:"#CC3344",
				link:"https://m.douban.com/doulist/968362/"
			},
			{
				title:"女孩们的故事【电影】",
				color:"#3BA94D",
				link:"https://m.douban.com/doulist/1125971/"
			},
			{
				title:"科幻是未来的钥匙——科幻启示录【科幻题材】",
				color:"#FF4055",
				link:"https://m.douban.com/doulist/4253902/"
			}
		] ;
		let bookList = [
			{
				title:"小波看书",
				color:"#42BD56",
				link:"https://m.douban.com/doulist/10372/"
			},
			{
				title:"村上春树周边",
				color:"#FF4055",
				link:"https://m.douban.com/doulist/105583/"
			},
			{
				title:"我凭名字认定了你",
				color:"#FF4055",
				link:"https://m.douban.com/doulist/99294/"
			},
			{
				title:"不可饶恕的女人们",
				color:"#FF4055",
				link:"https://m.douban.com/doulist/35573/"
			},
			{
				title:"爱欲书",
				color:"#FF4055",
				link:"https://m.douban.com/doulist/38088147/"
			},
			{
				title:"他们还写侦探小说",
				color:"#FF4055",
				link:"https://m.douban.com/doulist/645579/"
			}
		] ;
		let 	lis , 
			list ,
			title ;

		if(currResType && currResType == "movie"){
			list = movieList ;
			title = "发现好电影";
		}else{
			list = bookList ;
			title = "发现好图书";
		}

		lis = list.map(function(item, index){
			return <FindMoreItem  title={item.title} color={item.color} link={item.link} key={index}/>
		});

		return (
			<section className="interests">
				<header>
					<h2>{ title }</h2>
				</header>
				<div className="section-content">
					<ul>
						{ lis }
					</ul>
				</div>
			</section>
		) ;
	}
}

export default connect(state => state, dispatch => {
	return {

	};
})(FindMore);