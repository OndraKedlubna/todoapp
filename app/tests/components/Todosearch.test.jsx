var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todosearch = require('Todosearch');

describe('Todosearch', () => {
    it('should exist', () => {
        expect(Todosearch).toExist();
    });

    it('should call onsearch with text', () =>{
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var todosearch = TestUtils.renderIntoDocument(<Todosearch onSearch={spy}/>);
        todosearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todosearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Dog');

    });

    it('should call onsearch with checked value', () =>{
        var showCompleted = true;
        var spy = expect.createSpy();
        var todosearch = TestUtils.renderIntoDocument(<Todosearch onSearch={spy}/>);
        todosearch.refs.showCompleted.checked = showCompleted;
        TestUtils.Simulate.change(todosearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');

    });
});