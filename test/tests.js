var expect = chai.expect;

describe('Cart Reducer', function () {

    var state;

    it('should set the default state', function () {
        state = cartReducer();
        expect(state.items.length).to.equal(0);
    });


    it('should add an item', function () {
        state = cartReducer(state, {
            type: 'ADD_ITEM',
            item: {
                id: 1, name: 'Book'
            }
        });
        expect(state.items.length).to.equal(1);
        expect(state.items[0].name).to.equal('Book');
    });

    it('should remove an item', function () {
        state = cartReducer(state, {
            type: 'REMOVE_ITEM',
            item: {
                id: 1, name: 'Book'
            }
        });
        expect(state.items.length).to.equal(0);
    });

    it('should calculate the item amount when adding', function () {
        state = cartReducer(state, {
            type: 'ADD_ITEM',
            item: {
                id: 1, name: 'Book'
            }
        });

        state = cartReducer(state, {
            type: 'ADD_ITEM',
            item: {
                id: 1, name: 'Book'
            }
        });
        expect(state.items.length).to.equal(1);
        expect(state.items[0].amount).to.equal(2);
    });


    it('should calculate the item amount when removing', function () {
        state = cartReducer(state, {
            type: 'REMOVE_ITEM',
            item: {
                id: 1, name: 'Book'
            }
        });

        expect(state.items.length).to.equal(1);
        expect(state.items[0].amount).to.equal(1);
    });
});
