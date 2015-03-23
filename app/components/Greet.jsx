var React = require('react');

var Greet = React.createClass({
    getInitialState: function () {
        return {id: 0, content: 'Now Loading...'};
    },
    loadFromServer: function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://rest-service.guides.spring.io/greeting', true);
        request.onreadystatechange = function () {
            if (request.readyState != 4) return;
            if (request.status != 200) {
                alert(request.status + ' error!');
            } else {
                this.setState(JSON.parse(request.responseText));
            }
        }.bind(this);
        request.send();
    },
    componentDidMount: function () {
        this.loadFromServer();
    },
    onClick: function () {
        this.loadFromServer();
    },
    render: function () {
        return (
            <div>
                <p>{this.state.id} {this.state.content}</p>
                <button onClick={this.onClick}>Reload</button>
            </div>);
    }
});

module.exports = Greet;