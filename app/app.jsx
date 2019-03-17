var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Todoapp = require('Todoapp');
//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css
//require('style!css!applicationStyles');
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <div>
        <p>boiler</p>
        <Todoapp/>
    </div>,
    document.getElementById('app')
);