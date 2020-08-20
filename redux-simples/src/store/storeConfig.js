import { createStore, combineReducers } from 'redux'

import numerosReducer from './reducers/numerosReducer'

const reducers = combineReducers({
    numeros: numerosReducer
})

const storeConfig = () => createStore(reducers);

export default storeConfig