import React from "react";
import { Route } from 'react-router-dom';
import Home from "./components/home";
import MoreMovie from "./components/moreMovie";
import MoreBook from "./components/moreBook";


export default (
	<div>
		<Route exact path="/" component={ Home }></Route>
		<Route exact path="/movie" component={ Home }></Route>
		<Route exact path="/book" component={ Home }></Route>
		<Route path="/movie/hotmore" component={ MoreMovie }></Route>
		<Route path="/movie/freemore" component={ MoreMovie }></Route>
		<Route path="/movie/newmore" component={ MoreMovie }></Route>
		<Route path="/book/hotfiction" component={ MoreBook }></Route>
		<Route path="/book/hotnonfiction" component={ MoreBook }></Route>
	</div>
);