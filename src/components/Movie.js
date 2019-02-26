import React from 'react';
import Paper from '@material-ui/core/Paper'
import './styles/Movie.css'
import ResponsiveDialog from './MovieModal'
import Button from '@material-ui/core/Button'
import SimpleMenu from './DropDownAdd'


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
        if (this.props.movie.poster_path){
            imagePath += this.props.movie.poster_path

        }else{
            imagePath = ''
        }

        var overview;
        if(this.props.movie.overview === ''){
            overview = "Sorry we do not have information on this particular movie/tv show."
        }else{
            overview = this.props.movie.overview
        }

        return (
            <Paper className = "flex minWidth" style = {{height:'30vh', width:'30vw', margin: '3vw', float: 'left'}}>
                <div style = {{height:'100%'}}>
                    <img src={imagePath} style = {{height:'100%'}}/> 
                </div>
                <span className = "relative fontCard" style = {{width:'100%', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                    <h5 className = "x-margin borderbottom">{this.props.movie.title}</h5>    
                    <div className = "x-margin">{overview.slice(0,300)+dots}</div>
                    </div>
                    <div style = {{display:'flex', justifyContent: 'flex-end', marginBottom: '1vh', marginRight: '1vh', marginLeft: '1vh'}}>
                        <SimpleMenu movie = {this.props.movie} />
                        <ResponsiveDialog text = {"More Info"} movie = {this.props.movie} />
                    </div>
                </span>
                
            </Paper>
        );
    }
}




export default Movie
