var React = require('react');
var Todolist = require('Todolist');
var Addtodo = require('Addtodo');
var Todosearch = require('Todosearch');

var Todoapp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
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
    handelAddTodo: function (text) {
        alert('new Todo: ' + text);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <Todosearch onSearch={this.handleSearch}/>
                <Todolist todos={todos}/>
                <Addtodo onSetTodo={this.handelAddTodo}/>
            </div>
        )
    }
});

module.exports = Todoapp;