var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todolist = require('Todolist');
var Todo = require('Todo');

describe('Todolist', () => {
    it('should exist', () => {
        expect(Todolist).toExist();
    });

    it('should render todo component for each item', () =>{
        var todos = [{
            id: 1,
            text: 'Do something'
        }, {
            id: 2,
            text: 'Check mail'
        }];
        var todoList = TestUtils.renderIntoDocument(<Todolist todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponents.length).toBe(todos.length);
    });
});