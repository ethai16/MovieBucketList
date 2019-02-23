import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import MovieSearchPage from './components/MovieSearchPage';
import './components/styles/global.css';
import BaseLayout from './components/BaseLayout';
import AllSearch from './components/AllSearch'
import MoviePage from './components/MoviePage'


// var store = createStore(reducer)
ReactDOM.render(
    <BaseLayout>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {App}/>
                    <Route path = '/movies/:pageID' component = {MovieSearchPage}/>
                    <Route path = '/search/:pageID' component = {AllSearch}/>
                    <Route path = '/movie/:pageID' component = {MoviePage}/>
                </Switch>
            </BrowserRouter>
    </BaseLayout>
    
    , document.getElementById('root'));

