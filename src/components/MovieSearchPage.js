import React from 'react';
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'
import './styles/global.css'

class MovieSearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ''
        }
    }

    getLink(passedLink){
        this.setState({
            ...this.state,
            link: passedLink
        })
        console.log(this.state.link)
    }

    render() {
        return (
            <div className = "show" style = {{display:'none'}}>
                <MovieSearch getLink = {(passedLink)=>{this.getLink(passedLink)}}/>
                <MovieList link = {this.state.link}/>
            </div>
        );
    }
}




export default MovieSearchPage
