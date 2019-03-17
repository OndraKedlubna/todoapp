var React = require('react');
var Todolist = require('Todolist');

var Todoapp = React.createClass({
        getInitialState: function(){
             return {
                todos: [
                    {
                        id: 1,
                        text: 'Walk the dog'
                    }, {
                        id: 2,
                        text: 'Clean the yard'
                    }, {
                        id: 3,
                        text: 'Learn react'
                    }, {
                        id: 4,
                        text: 'sleep'
                    }
                ]
             };
        },
        render: function () {
            var {todos} = this.state;
            return (
                <div>
                    <Todolist todos={todos}/>
                </div>
            )
        }
});

module.exports = Todoapp;