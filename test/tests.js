var expect = chai.expect;

describe('Cart Reducer', function () {

    var state = cartReducer();

    it('should set the default state', function () {
        expect(state.items.length).to.equal(0);
    });


    it('should add an item', function () {
        state = cartReducer(state, {
            type: 'ADD_ITEM',
            item: {
                name: 'Book'
            }
        });
        expect(state.items.length).to.equal(1);
        expect(state.items[0].name).to.equal('Book');
    });

    it('should remove an item', function () {
        state = cartReducer(state, {
            type: 'REMOVE_ITEM',
            item: {
                name: 'Book'
            }
        });
        expect(state.items.length).to.equal(0);
    });
});
