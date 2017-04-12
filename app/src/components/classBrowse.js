// 分类浏览
import React, { Component } from "react";
import { connect } from "react-redux";
import ClassBrowseItem from "./ClassBrowseItem" ;
import style from "../../../public/css/home.css";

class ClassBrowse extends Component {
	render() {
		let currResType = this.props.header.currResType;
		let movieList = [
			{
				title:"经典",
				link:"/movie/classic"
			},
			{
				title:"冷门佳片",
				link:"/movie/underrated"
			},
			{
				title:"豆瓣高分",
				link:"/movie/doubantop"
			},
			{
				title:"动作",
				link:"/movie/action"
			},
			{
				title:"喜剧",
				link:"/movie/comedy"
			},
			{
				title:"爱情",
				link:"/movie/love"
			},
			{
				title:"悬疑",
				link:"/movie/mystery"
			},
			{
				title:"恐怖",
				link:"/movie/horror"
			},
			{
				title:"科幻",
				link:"/movie/scifi"
			},
			{
				title:"治愈",
				link:"/movie/sweet"
			},
			{
				title:"文艺",
				link:"/movie/artfilm"
			},
			{
				title:"成长",
				link:"/movie/youth"
			},
			{
				title:"动画",
				link:"/movie/animation"
			},
			{
				title:"华语",
				link:"/movie/chinese"
			},
			{
				title:"欧美",
				link:"/movie/western"
			},
			{
				title:"韩国",
				link:"/movie/korean"
			}
		] ;
		let bookList = [
			{
				title:"小说",
				link:"/book/novel"
			},
			{
				title:"爱情",
				link:"/book/love"
			},
			{
				title:"历史",
				link:"/book/history"
			},
			{
				title:"外国文学",
				link:"/book/foreign"
			},
			{
				title:"青春",
				link:"/book/youth"
			},
			{
				title:"励志",
				link:"/book/motivation"
			},
			{
				title:"随笔",
				link:"/book/essay"
			},
			{
				title:"传记",
				link:"/book/bio"
			},
			{
				title:"推理",
				link:"/book/detective"
			},
			{
				title:"旅行",
				link:"/book/travel"
			},
			{
				title:"奇幻",
				link:"/book/fantasy"
			},
			{
				title:"经管",
				link:"/book/business"
			}
		] ;
		let  lis , 
			list ;

		if(currResType && currResType == "movie"){
			list = movieList;
		}else{
			list = bookList;
		}

		lis = list.map(function(item, index){
			return <ClassBrowseItem title={ item.title } link={ item.link } key={ index }/>
		});

		return (
			<section className={style.types}>
				<header>
					<h2>分类浏览</h2>
				</header>
				<div className={style['section-content']}>
					<a name="cate"></a>
					<ul className={style['type-list']}>
						{ lis }
					</ul>
				</div>
			</section>
		);
	}
}

export default connect(state => state, dispatch =>{
	return {
	};
})(ClassBrowse);