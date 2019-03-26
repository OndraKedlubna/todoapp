var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid array', () => {
            var todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid array', () =>{
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should get empty array for bad local storage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should get valid array', () => {
            var todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', ()=> {
        var todos = [{
            id: 1,
            test: 'text here',
            completed: true
        }, {
            id: 2,
            test: 'other text',
            completed: false
        } , {
            id: 3,
            test: 'text here',
            completed: true
        }];

        it('should return all if showCompleted', () =>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should only non completed showCompleted', () =>{
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed', ()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
            expect(filteredTodos[0].completed).toBe(false);
        });
    });
});