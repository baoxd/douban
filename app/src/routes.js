import React from "react";
import { Route } from 'react-router-dom';
import Home from "./components/home";
import MoreMovie from "./components/moreMovie";


export default (
	<div>
		<Route exact path="/" component={ Home }></Route>
		<Route exact path="/movie" component={ Home }></Route>
		<Route path="/book" component={ Home }></Route>
		<Route path="/movie/hotmore" component={ MoreMovie }></Route>
	</div>
);