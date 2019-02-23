import React from 'react';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import MovieSearchGenre from './MovieSearchGenre';
import MovieSearchYear from './MovieSearchYear';
import './styles/MovieSearch.css'


class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            year: '',
            genre: ''
        };
        this.updateYear = this.updateYear.bind(this);
        this.updateGenre = this.updateGenre.bind(this);

    }

    updateYear(yearInput){
        this.setState({
            ...this.state,
            year: yearInput
        })
    }

    updateGenre(genreInput){
        this.setState({
            ...this.state,
            genre: genreInput
        })

    }

    search(){
        var yearLink = '';
        var genreLink = '';
        if (this.state.year !== ''){
            yearLink = `&primary_release_year=${this.state.year}`
        }

        if(this.state.genre !== ''){
            genreLink = `&with_genres=${this.state.genre}`
        }

        var url = `/movies/page=1${genreLink + yearLink}`
        var withoutPage = genreLink + yearLink
        window.location.href = url
        this.props.getLink(withoutPage)
    }

    render() {
        return (
            <div className = "center" >
                <form autoComplete = "off">
                    <MovieSearchYear updateYear = {(yearInput)=> this.updateYear(yearInput)} searched ={this.state.year}/>
                    <MovieSearchGenre updateGenre = {(genreInput)=>this.updateGenre(genreInput)}searched ={this.state.genre}/>
                    <Button onClick = {()=>this.search()}>Sort</Button>
                </form>
            </div>
        );
    }
}




export default MovieSearch
