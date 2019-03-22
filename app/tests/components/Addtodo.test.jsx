var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Addtodo = require('Addtodo');

describe('Addtodo', () => {
    it('should exist', () => {
        expect(Addtodo).toExist();
    });

    it('should call onSetCountdown', () =>{
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<Addtodo onSetTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todo.value = 'Do it';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('Do it');

    });

    it('should not call onSetCountdown with empty value', () =>{
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<Addtodo onSetTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todo.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();

    });
});