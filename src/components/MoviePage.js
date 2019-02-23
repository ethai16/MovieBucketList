import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './styles/MoviePage.css'
import { isAbsolute } from 'path';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoaded1: false,
            isLoaded2: false,
            isLoaded3: false,
            isLoaded4: false,
            cast: '',
            movieData: '',
            videos: '',
            images: '',
            backdrop: ''
        }

}

    componentDidMount(){
    var data = window.location.pathname.slice(7)
    // var pageNumberString = this.pageNumber.toString()
    fetch(`https://api.themoviedb.org/3/movie/${data}?api_key=62c52cfa5f5e3486e1a7b739ca88c626&language=en-US`)
    .then(res => res.json())
    .then(
        (result)=>{
            console.log(result)
            this.setState({
                ...this.state,
                isLoaded1: true,
                movieData: result
            })
        },
        (error) => {
            this.setState({
                ...this.state,
                isLoaded1:true,
                error
            });
        },
        fetch(`https://api.themoviedb.org/3/movie/${data}/credits?api_key=62c52cfa5f5e3486e1a7b739ca88c626`)
        .then(res => res.json())
        .then(
            (result2)=>{
                console.log(result2)
                this.setState({
                    ...this.state,
                    isLoaded2: true,
                    cast: result2
                })
            },
            (error) => {
                this.setState({
                    ...this.state,
                    isLoaded1:true,
                    error
                });
            },
            fetch(`https://api.themoviedb.org/3/movie/${data}/videos?api_key=62c52cfa5f5e3486e1a7b739ca88c626`)
            .then(res => res.json())
            .then(
                (result3)=>{
                    console.log(result3)
                    this.setState({
                        ...this.state,
                        isLoaded3: true,
                        videos: result3
                    })
                },
                (error) => {
                    this.setState({
                        ...this.state,
                        isLoaded3:true,
                        error
                    });
                },
                fetch(`http://api.themoviedb.org/3/movie/${data}/images?api_key=62c52cfa5f5e3486e1a7b739ca88c626`)
                .then(res => res.json())
                .then(
                    (result4)=>{
                        this.setState({
                            ...this.state,
                            isLoaded4: true,
                            images: result4,
                            backdrop: result4.backdrops[0].file_path
                        })
                    },
                    (error) => {
                        this.setState({
                            ...this.state,
                            isLoaded4:true,
                            error
                        });
                    }
                )

            )
        )
    )
}

    render() {
        var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
        if (this.state.movieData.poster_path){
            imagePath += this.state.movieData.poster_path

        }else{
            imagePath = ''
        }

        const backgroundPicture = {
            /* The image used */
            backgroundImage: `url("https://image.tmdb.org/t/p/w1000_and_h563_face/${this.state.backdrop}")`,

            /* Full height */
            height: '60vh',

            /* Create the parallax scrolling effect */
            backgroundPosition: 'center',
            backgroundRepeat: 'no - repeat',
            backgroundSize: 'cover',
            position: 'relative',
            minHeight: '300px'
        }

        const layer = {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }
        
        return (
            <div>
                <div className = "background" style ={backgroundPicture}>
                    <div style = {layer} className = "displayflex">
                    <div  style = {{height:'100%', width: '30%'}} className ="middlePicture">
                        <img src={imagePath} style = {{width:'65%', height:'auto'}}/>
                    </div>
                    <div style = {{overflow:'auto',width:'70%',color:'white', margin:'3vw', marginLeft: '0', minWidth: "300px", fontSize: "2.5vh"}}>
                        <h1>{this.state.movieData.title}</h1>
                        <div>{this.state.movieData.overview}</div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default MoviePage
