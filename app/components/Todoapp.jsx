var React = require('react');
var Todolist = require('Todolist');
var Addtodo = require('Addtodo');
var Todosearch = require('Todosearch');
var TodoAPI = require('TodoAPI');

var uuid = require('node-uuid');


var Todoapp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function (){
        TodoAPI.setTodos(this.state.todos);
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