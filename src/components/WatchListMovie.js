import React from 'react';
import Paper from '@material-ui/core/Paper'
import './styles/WatchListMovie.css';
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux';



class WatchListMovie extends React.Component {
    constructor(props) {
        super(props);
        
    }

    goToPage = () => {
        this.setState({ open: false });
        window.location.href = `/movie/${this.props.movie.movieData.id}`
    }

    render() {
        var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
        var fullPath;

        if (this.props.movie.movieData.poster_path){
            fullPath = imagePath + this.props.movie.movieData.poster_path
        }else{
            fullPath = ''
        }

        return (
            <Paper className ="containerHover"style = {{margin: '2px'}}>
                <img src = {fullPath} style = {{width:'15vw', minWidth: '200px'}} className = "imageHover"/>
                <div className="middleHover">
                    <Button onClick={()=>{this.props.onMoveMovieToArchive(this.props.movie)}} variant ="contained" color = "primary" className="textHover">Watched</Button>
                    <Button onClick={()=>{this.props.onRemoveMovieWatchlist(this.props.movie)}} variant ="contained" color = "primary" className="textHover">Remove</Button>
                    <Button onClick={this.goToPage} variant ="contained" color = "primary" className="textHover">More Info</Button>
                </div>
            </Paper>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAddMovieArchive: (item) => dispatch({
            type: 'addMovieArchive',
            movieData: item
        }),
        onRemoveMovieArchive: (item) => dispatch({
            type: 'removeMovieArchive',
            movieData: item
        }),
        onAddMovieWatchList: (item) => dispatch({
            type: 'addMovieWatchlist',
            movieData: item
        }),
        onRemoveMovieWatchlist: (item) => dispatch({
            type: 'removeMovieWatchlist',
            movieData: item
        }),
        onMoveMovieToArchive: (item) => dispatch({
            type: 'moveMovieToArchive',
            movieData: item.movieData,
            movieTitle: item.movieTitle
        })
    }
}

export default connect(null, mapDispatchToProps)(WatchListMovie)
