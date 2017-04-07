// app入口文件
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import routes from './routes';


// var FastClick = require('fastclick');
const store = configureStore();

//解决移动端300毫秒延迟
// FastClick.attach(document.body);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);

// 组件测试
// import Header from "./components/Header";
// ReactDom.render(<Header />, document.getElementById('app'));