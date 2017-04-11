// 主页-内容页
import React, { Component } from "react";
import { connect } from "react-redux" ;
// import HotMovie from "./hotMovie" ;
import MovieList from "./movieList";
import FindMore from "./findMore";
import ClassBrowse from "./ClassBrowse";
import Footer from "./footer";


class Content extends Component{
	render() {
		const currResType = this.props.header.currResType;

		let hotMovies = [
			{
				poster:"https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2453176400.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"攻壳机动队"
			},
			{
				poster:"https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2436030518.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"金刚：骷髅岛"
			},
			{
				poster:"https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"嫌疑人X的献身"
			},
			{
				poster:"https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2453197648.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"非凡任务"
			},
			{
				poster:"https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2417948644.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"美女与野兽"
			},
			{
				poster:"https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2445601403.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"绑架者"
			}
		] ;
		let freeMovies =  [
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2359505184.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"彼得的龙"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2399366116.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"三少爷的剑"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2403376386.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"呆呆计划"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2393776153.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"脑残粉"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2393908940.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"勇士之门"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2402824160.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"28岁未成年"
			}
		];
		let newMovies = [
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2255139499.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"女孩舞步"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2376882360.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"生日卡片"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2418474789.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"解冻"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2401405665.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"临渊而立"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2345544638.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"诗无尽头"
			},
			{
				poster: "https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2323540565.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg",
				name:"绝命荒漠"
			}
		] ;

		return (
			<div className="page">
				<div className="card">
					{/*  热门电影  */ }
					<MovieList movies={ hotMovies } title="影院热映" onClick={() => {console.log('跳转到电影详情'); }}  moreClick={() => {console.log("点击更多");}}/>
					{/*  免费电影  */ }
					<MovieList movies={ freeMovies } title="免费在线观影" onClick={() => {console.log('跳转到电影详情'); }}  moreClick={() => {console.log("点击更多");}}/>
					{/*  新片速递  */ }
					<MovieList movies={ newMovies } title="新片速递" onClick={() => {console.log('跳转到电影详情'); }}  moreClick={() => {console.log("点击更多");}}/>
					{/*  发现更多  */ }
					<FindMore />
					{/* 分类浏览 */}
					<ClassBrowse />
				</div>
				{/* footer */}
				<Footer />
			</div>
		);
	}
}



export default connect(state=>state)(Content);