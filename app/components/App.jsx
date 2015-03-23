var React = require('react');
var Greet = require('./Greet.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>React.js</h1>
                <Greet />
            </div>
        );
    }
});

module.exports = App;