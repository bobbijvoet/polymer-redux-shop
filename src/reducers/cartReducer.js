var initialState = {
    items: [],
    totalItems: 0
};


function cartReducer(state, action) {
    if(state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case 'ADD_ITEM':
            state.items.push(action.item);
            console.log(state);
            return Object.assign({}, state);
        case 'REMOVE_ITEM':
            state.items.splice(state.items.indexOf(action.item), 1);
            console.log(state);

            return Object.assign({}, state);

        default:
            console.log('default');
            return state
    }
}

