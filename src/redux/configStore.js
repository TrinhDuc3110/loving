import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import reduxThunk from 'redux-thunk';


const rootReducer = combineReducers({
    // reducer khai báo tại đây
    
});


const store = legacy_createStore(rootReducer,applyMiddleware(reduxThunk));
    
export default store;