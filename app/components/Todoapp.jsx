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
                    text: 'Walk the dog',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Learn react',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'sleep',
                    completed: false
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
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
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
                <Todolist todos={todos} onToggle={this.handleToggle}/>
                <Addtodo onSetTodo={this.handelAddTodo}/>
            </div>
        )
    }
});

module.exports = Todoapp;