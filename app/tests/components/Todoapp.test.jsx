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
});