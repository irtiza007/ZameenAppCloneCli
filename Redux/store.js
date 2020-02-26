//import redux dependencies start
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
//import redux dependencies end


import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//import reducer start
import reducers from '../Reducer' ;
//import reducer end


const middleWare=[thunk];


if(process.env.Node_ENV === 'development'){
//middleware.push(logger);
}
const configStore = () =>{
   const persistReducer = persistCombineReducers({
key:'root',
storage:AsyncStorage,
//blacklist:['network', 'auth'],
   },reducers);
const store = createStore(persistReducer, applyMiddleware(...middleWare));
const persister = persistStore(store);
return {store, persister};

};

//for offline data presister
export default configStore