var initialState = {
    items: [],
    totalItems: 0
};

function cartReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    const items = [...state.items];

    const existingItemIndex = items.findIndex((element)=> {
        return element.id === action.item.id;
    });

    switch (action.type) {
        case 'ADD_ITEM':
            if (existingItemIndex >= 0) {
                items[existingItemIndex].amount++;
                items.splice(existingItemIndex, 1, Object.assign({}, items[existingItemIndex]));
            } else {
                action.item.amount = 1;
                items.push(action.item);
            }
            return Object.assign({}, state, {
                items: [...items],
                totalItems: state.totalItems + 1
            });

        case 'REMOVE_ITEM':
            if (existingItemIndex >= 0) {
                items[existingItemIndex].amount--;
                if (items[existingItemIndex].amount === 0) {
                    items.splice(items.indexOf(action.item), 1);
                } else {
                    items.splice(existingItemIndex, 1, Object.assign({}, items[existingItemIndex]));
                }
            }
            return Object.assign({}, state, {
                items: [...items],
                totalItems: state.totalItems - 1
            });

        default:
            return state
    }
}

