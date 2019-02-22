import React from 'react';
import Paper from '@material-ui/core/Paper'
import './styles/Movie.css'
import ResponsiveDialog from './MovieModal'
class Movie extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var dots = '';
        if (this.props.movie.overview.length > 300){
            dots = '...'
        }
        var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
        imagePath += this.props.movie.poster_path
        return (
            <Paper className = "flex" style = {{height:'40vh', width:'40vw', margin: '3vw'}}>
                <div style = {{height:'100%'}}>
                    <img src={imagePath} style = {{height:'100%'}}/> 
                </div>
                <div className = "relative">
                    <h3 className = "x-margin borderbottom">{this.props.movie.title}</h3>    
                    <div className = "x-margin">{this.props.movie.overview.slice(0,300)+dots}</div>
                    <div className = "positionButton absolute">
                        <ResponsiveDialog movie = {this.props.movie} />
                    </div>
                </div>
                
            </Paper>
        );
    }
}




export default Movie
