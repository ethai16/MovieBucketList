import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './styles/MoviePage.css';
import { isAbsolute } from 'path';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            cast: '',
            movieData: '',
            videos: '',
            images: '',
            backdrop: '',
            genres: '',
            castMember: '',
            budget: '',
            earning: '',
            runtime: ''
        }

    }

    componentWillMount() {
        var data = window.location.pathname.slice(7)
        // var pageNumberString = this.pageNumber.toString()
        Promise.all([
            fetch(`https://api.themoviedb.org/3/movie/${data}?api_key=62c52cfa5f5e3486e1a7b739ca88c626&language=en-US`),
            fetch(`https://api.themoviedb.org/3/movie/${data}/credits?api_key=62c52cfa5f5e3486e1a7b739ca88c626`),
            fetch(`https://api.themoviedb.org/3/movie/${data}/videos?api_key=62c52cfa5f5e3486e1a7b739ca88c626`),
            fetch(`http://api.themoviedb.org/3/movie/${data}/images?api_key=62c52cfa5f5e3486e1a7b739ca88c626`)
        ])
            .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()])
                .then(
                    ([res1, res2, res3, res4]) => {
                        var videoLink;
                        var date = new Date(res1.release_date)
                        console.log(res1)
                        if (res3.results[0]) {
                            videoLink = 'https://www.youtube.com/embed/' + res3.results[0].key
                        } else {
                            videoLink = ''
                        }

                        var fiveCast = [];

                        for (var i = 0; i < 5; i++) {
                            if (res2.cast[i] != undefined) {
                                fiveCast.push(res2.cast[i])
                            }
                        }

                        var castInfo;

                        if (fiveCast.length === 5) {
                            castInfo = fiveCast.map(person => {
                                var image = "https://image.tmdb.org/t/p/w276_and_h350_face/" + person.profile_path
                                return (
                                    <Card style={{ width: '15vw' }}>
                                        <CardMedia style={{ height: '250px' }} image={image}/>
                                        <div style={{ fontWeight: 'bold' }}>{person.name}</div>
                                        {person.character}
                                    </Card>)
                            })
                        } else {
                            castInfo = ''
                        }


                        var numberWithCommas = (x) => {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }

                        this.setState({
                            ...this.state,
                            isLoaded: true,
                            movieData: res1,
                            genres: res1.genres.map(genre => {
                                return (genre.name + ' ')
                            }),
                            cast: fiveCast,
                            video: videoLink,
                            images: res4,
                            backdrop: res4.backdrops[0].file_path,
                            date: date.toDateString().split(' ').slice(1).join(' '),
                            castMember: castInfo,
                            budget: numberWithCommas(res1.budget),
                            earning: numberWithCommas(res1.revenue),
                            runtime: res1.runtime
                        })
                    },
                    (error) => {
                        this.setState({
                            ...this.state,
                            isLoaded: true,
                            error
                        });
                    }
                )
            )


    }


    createNotification = (type) => {
        switch (type) {
            case 'watchList':
                return NotificationManager.success('Added to Watch List', this.props.movie.title, 1500);
            case 'archive':
                return NotificationManager.success('Added to Archive', this.props.movie.title, 1500);
            case 'warning':
                return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            case 'error':
               return NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                });
            default:
                break
        }
    };

    combineFunctionArchive = (type) => {
        this.props.onAddMovieArchive(this.state.movieData)
        this.createNotification(type)
    }

    combineFunctionWatchList= (type) => {
        this.props.onAddMovieWatchList(this.state.movieData)
        this.createNotification(type)
    }


    render() {
        var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
        if (this.state.movieData.poster_path) {
            imagePath += this.state.movieData.poster_path

        } else {
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
            minHeight: '350px',
            maxHeight: '520px',
            overflow: 'hidden',
            marginBottom: '3vw',
            border: '3px solid white'
        }

        const layer = {
            backgroundColor: 'rgba(0, 0, 0, 0.80)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }
        // var listGenre = this.state.genres.map(genre => {
        //     return <div>{genre.name}</div>
        // })

        return (
            <div>
                <div style = {{backgroundColor: 'rgba(0,0,0,.80)', height:'50vh', width:'100vw', paddingTop:'130px'}}>
                <div style={{ margin: '3vw', marginTop: '0'}}>
                <div className="background" style={backgroundPicture}>
                    <div style={layer} className="displayflex middleonsmall">
                        <div style={{ height: '100%', width: '30%' }} className="middlePicture hide">
                            <img src={imagePath} style={{ width: '65%', height: 'auto', padding: '30px', minWidth: '250px' }} />
                        </div>
                        <div style={{ overflow: 'auto', width: '70%', color: 'white', marginLeft: '0', marginRight: '5vw', minWidth: "300px", display: 'flex', alignItems: 'center' }}>
                            <div>
                                <h1>{this.state.movieData.title}</h1>
                                <br />
                                <div><div style={{ fontWeight: 'bold' }}>Overview:</div> <br />
                                    {this.state.movieData.overview}
                                </div>
                                <br />
                                <div><div style={{ fontWeight: 'bold' }}>Genre:</div> {this.state.genres}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '50vh', width: '94vw', display: 'flex', justifyContent: 'space-between', marginBottom: '3vw' }}>
                    <div style={{ color: 'white', width: '30%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div style = {{display:'flex', justifyContent:'center', flexWrap: 'wrap'}}>
                            <Button style = {{width:'100%', minHeight:'40px'}} onClick = {()=>{this.combineFunctionWatchList('watchList')}} variant = "contained" color = 'primary'>ADD TO WATCHLIST</Button>
                            <Button style = {{width:'100%', minHeight:'40px', marginTop:'5px'}}onClick = {()=>{this.combineFunctionArchive('archive')}} variant = "contained" color = 'primary'>ADD TO ARCHIVE</Button>
                        </div>
                        <Card style ={{ backgroundColor: 'rgba(0, 0, 0, 0.80)', padding: '2vh'}}>Release Date: {' '}{this.state.date}</Card>
                        <Card style ={{ backgroundColor: 'rgba(0, 0, 0, 0.80)', padding: '2vh'}}>Runtime: {' '}{this.state.runtime} Min</Card>
                        <Card style ={{ backgroundColor: 'rgba(0, 0, 0, 0.80)', padding: '2vh'}}>Budget: {' '}${this.state.budget}</Card>
                        <Card style ={{ backgroundColor: 'rgba(0, 0, 0, 0.80)', padding: '2vh'}}>Revenue: {' '}${this.state.earning}</Card>
                    </div>
                    <div style={{ width: '66%', backgroundColor: 'black', height: '100%' }}>
                        <iframe width="100%" height="100%" src={this.state.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div style={{ width: '94vw', display: 'flex', justifyContent: 'space-between' }}>
                    {this.state.castMember}
                </div>

            </div>
                </div>
                <NotificationContainer />

            </div>
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
            movieData: item
        })
    }
}



export default connect(null, mapDispatchToProps)(MoviePage)