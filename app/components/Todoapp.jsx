var React = require('react');
var Todolist = require('Todolist');
var Addtodo = require('Addtodo');
var Todosearch = require('Todosearch');
var uuid = require('node-uuid');

var Todoapp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                }, {
                    id: uuid(),
                    text: 'Clean the yard'
                }, {
                    id: uuid(),
                    text: 'Learn react'
                }, {
                    id: uuid(),
                    text: 'sleep'
                }
            ]
        };
    },
    handelAddTodo: function (text) {
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text
               }
           ]
        });
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