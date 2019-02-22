import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MovieSearchPage from './components/MovieSearchPage'
import './components/styles/global.css'

// var store = createStore(reducer)
ReactDOM.render(

        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {App}/>
                <Route path = '/movie/:pageID' component = {MovieSearchPage}/>
            </Switch>
        </BrowserRouter>
    
    , document.getElementById('root'));

