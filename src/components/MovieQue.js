import React from 'react';
import {connect} from 'react-redux';
import ResponsiveDialog from './MovieModal'

class MovieQue extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
        var fullPath;

        if (this.props.watchList[0].movieData.poster_path){
            fullPath = imagePath + this.props.watchList[0].movieData.poster_path
        }else{
            fullPath = ''
        }

        let rand = Math.floor(Math.random() * this.props.watchList.length)

        const backgroundPicture = {
            /* The image used */
            backgroundImage: `url("https://image.tmdb.org/t/p/w1000_and_h563_face/${this.props.watchList[0].movieData.backdrop_path}")`,

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
            marginBottom: '3vw'
        }

        const layer = {
            backgroundColor: 'rgba(0, 0, 0, 0.80)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }


        return (
            <div style = {{margin:'5vw'}}>
                
                <h1 style ={{textAlign: 'center', fontWeight: 'bolder'}}>Next On Your Watch List!</h1>

                <div className="background" style={backgroundPicture}>
                    <div style={layer} className="displayflex middleonsmall">
                        <div style={{ height: '100%', width: '30%' }} className="middlePicture hide">
                            <img src={fullPath} style={{ width: '65%', height: 'auto', padding: '30px', minWidth: '250px' }} />
                        </div>
                        <div style={{ overflow: 'auto', width: '70%', color: 'white', marginLeft: '0', marginRight: '5vw', minWidth: "300px", display: 'flex', alignItems: 'center' }}>
                            <div>
                                <br />
                                <h2>{this.props.watchList[0].movieData.title}</h2>
                                <br />
                                <div><div style={{ fontWeight: 'bold' }}>Overview:</div> <br />
                                    {this.props.watchList[0].movieData.overview}
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div style = {{width:'90vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    Don't Want To Watch This Right Now?
                    <ResponsiveDialog text = {'Randomize!'} movie = {this.props.watchList[rand].movieData} />
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

export default connect(mapStateToProps, null)(MovieQue)
