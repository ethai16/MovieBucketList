import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import MovieSearchPage from './components/MovieSearchPage';
import './components/styles/global.css';
import BaseLayout from './components/BaseLayout';
import AllSearch from './components/AllSearch';
import MoviePage from './components/MoviePage';
import listReducer from './reducers/listReducer';
import { PersistGate } from 'redux-persist/integration/react';
import {store,  persistor} from './configureStore';
import WatchList from './components/WatchList';
import Archive from './components/Archive';
import MovieQue from './components/MovieQue'

// const persistedState = loadState()
// const store = createStore(
//     listReducer, 
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

// store.subscribe(()=>{
//     saveState(store.getState())
// })

ReactDOM.render(
    <Provider store = {store}>
        <PersistGate loading = {null} persistor = {persistor}>
        <BaseLayout>
                <BrowserRouter>
                    <Switch>
                        <Route exact path = "/" component = {App}/>
                        <Route exact path = "/upnext" component = {MovieQue}/>
                        <Route path = "/watchlist" component = {WatchList}/>
                        <Route path = "/archive" component = {Archive}/>
                        <Route path = '/movies/:pageID' component = {MovieSearchPage}/>
                        <Route path = '/search/:pageID' component = {AllSearch}/>
                        <Route path = '/movie/:pageID' component = {MoviePage}/>
                    </Switch>
                </BrowserRouter>
        </BaseLayout>
        </PersistGate>
    </Provider>
    
    , document.getElementById('root'));

