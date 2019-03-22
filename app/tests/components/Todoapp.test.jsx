var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todoapp = require('Todoapp');

describe('Todoapp', () => {
    it('should exist', () => {
        expect(Todoapp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () =>{
        var todoText = 'test Text';
        var todoApp = TestUtils.renderIntoDocument(<Todoapp/>);

        todoApp.setState({todos: []});
        todoApp.handelAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

});