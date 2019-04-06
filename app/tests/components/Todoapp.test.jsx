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
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () =>{
       var todoData = {
           id: 11,
           text: 'testFeatues',
           completed: false,
           createdAt: 0,
           completedAt: undefined
       };
       var todoapp = TestUtils.renderIntoDocument(<Todoapp/>);
       todoapp.setState({todos: [todoData]});

        expect(todoapp.state.todos[0].completed).toBe(false);
        todoapp.handleToggle(11);
        expect(todoapp.state.todos[0].completed).toBe(true);
        expect(todoapp.state.todos[0].completedAt).toBeA('number');
    });


    //test completed => incompleted completedAt remove
    it('should toggle set incompleted correctly', () =>{
        var todoData = {
            id: 11,
            text: 'testFeatues',
            completed: true,
            createdAt: 0,
            completedAt: 50
        };
        var todoapp = TestUtils.renderIntoDocument(<Todoapp/>);
        todoapp.setState({todos: [todoData]});

        expect(todoapp.state.todos[0].completed).toBe(true);
        todoapp.handleToggle(11);
        expect(todoapp.state.todos[0].completed).toBe(false);
        expect(todoapp.state.todos[0].completedAt).toNotExist();
    });

});