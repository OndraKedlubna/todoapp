var React = require('react');

var Addtodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todo.value;
        if (todoText.length > 0) {
            this.refs.todo.value= '';
            this.props.onSetTodo(todoText);
        } else {
            this.refs.todo.focus();
        }

    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="todo" placeholder="Add new Todo"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
        )
    }
});

module.exports = Addtodo;