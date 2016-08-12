var ReduxBehavior = PolymerRedux(createStore());

function createStore() {
    return Redux.createStore(createReducer(), {}, Redux.applyMiddleware(LoggerMiddleware()));
}

function createReducer() {
    return Redux.combineReducers({
        cartReducer: cartReducer
    });
}