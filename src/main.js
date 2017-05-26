//main.js
import React from 'react';
import ReactDom from 'react-dom';
import Router from "./router.js"
import Header from "./components/hello.jsx"
ReactDom.render(
    // {*(<Router>
    //     <Route path="/aa" component={Component1}/>
    // </Router>
    // ),*}
    <Header />,
    document.getElementById('content')
);