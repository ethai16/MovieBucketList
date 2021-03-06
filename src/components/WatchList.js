import React from 'react';
import {connect} from 'react-redux';
import WatchListMovie from './WatchListMovie'


class WatchList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
        var fullPath;
        var theTitle;
        var modal;
        var rand;
        var backgroundPicture;

        if (this.props.watchList[0] !== undefined){
            if (this.props.watchList.length === 1){
                rand = 0
            } else {
                rand = Math.floor(Math.random() * (this.props.watchList.length))
            }

            backgroundPicture = {
                /* The image used */
                backgroundImage: `url("https://image.tmdb.org/t/p/w1000_and_h563_face/${this.props.watchList[rand].movieData.backdrop_path}")`,
                // background: `url("https://image.tmdb.org/t/p/w1000_and_h563_face/${this.props.watchList[rand].movieData.backdrop_path}")0 0 no-repeat`,

                /* Full height */
                height: '80vh',
    
                /* Create the parallax scrolling effect */
                backgroundPosition: '50% 0%',
                backgroundRepeat: 'no - repeat',
                backgroundSize: 'cover',
                position: 'relative',
                minHeight: '350px',
                maxHeight: '520px',
                overflow: 'hidden',
                marginBottom: '3vw'
            }
            fullPath = imagePath + this.props.watchList[0].movieData.poster_path

        }else{
            theTitle = 'Go to Discover and Add Movies to Your Watch List Now!'
            fullPath = ''
            backgroundPicture = {
                                /* Full height */
                                height: '80vh',
    
                                /* Create the parallax scrolling effect */
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no - repeat',
                                backgroundSize: 'cover',
                                position: 'relative',
                                minHeight: '350px',
                                maxHeight: '520px',
                                overflow: 'hidden',
                                marginBottom: '3vw'
                            }
            modal = ''
            rand = ''
        }


        const layer2 = {
            background: `-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255)))`, 
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }

        const layer = {
            backgroundColor: 'rgba(0, 0, 0, 0.70)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }

        var listMovies;
        if(this.props.watchList !== undefined && this.props.watchList.length ){
            if(this.props.watchList.length !== 0){
                listMovies = this.props.watchList.map(movie => {
                    return <WatchListMovie movie = {movie} />
                })
            }
        }
        return (
            <div>
                <div className="background" style={backgroundPicture}>
                    <div style={layer} className="displayflex middleonsmall">
                        {/* <div style = {layer2} className="displayflex middleonsmall"> */}
                        <div style={{ overflow: 'auto', width: '100%', color: 'white', marginLeft: '0', marginRight: '5vw', minWidth: "300px", display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                            <div>
                                <h2 style = {{paddingBottom:'5px', borderBottom:'2px white solid', fontSize: '35pt'}}>Watch List</h2>
                            </div>
                        </div>
                        </div>
                    {/* </div> */}
                </div>
                <div style={{minHeight:'100vh', marginBottom: '3vh'}}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {listMovies}
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        watchList: state.watchList,
        archive: state.archive
    }
}


export default connect(mapStateToProps, null)(WatchList)