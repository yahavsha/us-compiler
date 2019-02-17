const assert = require('assert');
const SymbolTable = require('../utils/SymbolTable');

describe('SymbolTable', function() {
    it('Should store values on the root scope', () => {
        let table = new SymbolTable();
    
        table.add('a', 100);
        table.add('b', 200);
        
        assert.equal(table.find('a'), 100);
        assert.equal(table.find('b'), 200);
        assert.equal(table.find('c'), null);
    });

    it('Should allow to modify values after setting them', () => {
        let table = new SymbolTable();
    
        table.add('a', 100);
        table.add('b', 200);
        
        assert.equal(table.find('a'), 100);
        assert.equal(table.find('b'), 200);
        assert.equal(table.find('c'), null);

        table.set('a', 300);
        table.set('b', 400);
        
        assert.equal(table.find('a'), 300);
        assert.equal(table.find('b'), 400);
    });

    it('Should not allow to add the same value twice', () => {
        let table = new SymbolTable();
    
        assert.equal(table.add('a', 100), true);
        assert.equal(table.add('a', 100), false);
        
    });

    it('Should allow access to outer scope symbols from inner scopes', () => {
        let table = new SymbolTable();
    
        table.add('a', 100);

        table.enterScope();
        assert.equal(table.find('a'), 100);
        assert.equal(table.find('b'), null);
    });

    it('Should be able to move between scopes', () => {
        let table = new SymbolTable();
    
        table.add('a', 100);

        {
            table.enterScope();

            assert.equal(table.find('a'), 100);
            assert.equal(table.find('b'), null);

            table.add('b', 200);
            
            assert.equal(table.find('a'), 100);
            assert.equal(table.find('b'), 200);

            table.exitScope();
        }

        assert.equal(table.find('a'), 100);
        assert.equal(table.find('b'), null);
    });

    it('Should keep outer scopes changed values after exiting an inner scope', () => {
        let table = new SymbolTable();

        table.add('a', 100);
        {
            table.enterScope();
            table.set('a', 200);
            table.exitScope();
        }

        assert.equal(table.find('a'), 200);
    });

    it('Should be able to nest multiple scopes', () => {
        let table = new SymbolTable();

        table.add('a', 1);

        {
            table.enterScope();
            table.add('b', 2);
            assert.equal(table.find('a'), 1);

            {
                table.enterScope();
                table.add('c', 3);
                assert.equal(table.find('a'), 1);
                assert.equal(table.find('b'), 2);
                assert.equal(table.find('c'), 3);
                table.exitScope();
            }

            assert.equal(table.find('a'), 1);
            assert.equal(table.find('b'), 2);
            assert.equal(table.find('c'), null);
            table.exitScope();
        }

        assert.equal(table.find('a'), 1);
        assert.equal(table.find('b'), null);
        assert.equal(table.find('c'), null);
    });
    
    it('Should be able to change values in multiple nested scopes', () => {
        let table = new SymbolTable();

        table.add('a', 1);

        {
            table.enterScope();
            table.add('b', 2);
            assert.equal(table.find('a'), 1);

            {
                table.enterScope();
                table.add('c', 3);
                assert.equal(table.find('a'), 1);
                assert.equal(table.find('b'), 2);
                assert.equal(table.find('c'), 3);

                table.set('a', 100); // << THE CHANGE

                table.exitScope();
            }

            assert.equal(table.find('a'), 100);
            assert.equal(table.find('b'), 2);
            assert.equal(table.find('c'), null);
            table.exitScope();
        }

        assert.equal(table.find('a'), 100);
        assert.equal(table.find('b'), null);
        assert.equal(table.find('c'), null);
    });
});