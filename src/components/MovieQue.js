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
        var theTitle;
        var modal;
        var rand;
        var backgroundPicture;
        var overview;

        // if (this.props.watchList[0].movieData.poster_path){
        //     fullPath = imagePath + this.props.watchList[0].movieData.poster_path
        // }else{
        //     fullPath = ''
        // }

        if (this.props.watchList[0] !== undefined){
            theTitle = this.props.watchList[0].movieData.title
            if (this.props.watchList.length === 1){
                rand = 0
            } else {
                rand = Math.floor(Math.random() * (this.props.watchList.length))
            }
            modal = <ResponsiveDialog text = {'Randomize!'} movie = {this.props.watchList[rand].movieData} />
            overview = <p>{this.props.watchList[0].movieData.overview}</p>

            backgroundPicture = {
                /* The image used */
                backgroundImage: `url("https://image.tmdb.org/t/p/w1000_and_h563_face/${this.props.watchList[0].movieData.backdrop_path}")`,
    
                /* Full height */
                height: '100vh',
    
                /* Create the parallax scrolling effect */
                backgroundPosition: 'center',
                backgroundRepeat: 'no - repeat',
                backgroundSize: 'cover',
                position: 'relative',
                minHeight: '350px',
                overflow: 'hidden',
            }
            fullPath = imagePath + this.props.watchList[0].movieData.poster_path

        }else{
            theTitle = 'Go to Discover and Add Movies to Your Watch List Now!'
            fullPath = ''
            backgroundPicture = {
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
                            }
            modal = ''
            rand = ''
        }


        const layer = {
            backgroundColor: 'rgba(0, 0, 0, 0.80)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }


        return (
            <div>
                <div className="background" style={backgroundPicture}>
                    <div style={layer}>
                    <h2 style ={{textAlign: 'center', fontWeight: 'bolder', color: 'white', fontSize:'40pt', paddingBottom:'20px', margin:'0',marginTop:'15vh'}}>Next On Your Watch List!</h2>
                    <div className="displayflex middleonsmall">
                        <div style={{ height: '100%', width: '30%' }} className="middlePicture hide">
                            <img src={fullPath} style={{ width: '65%', height: 'auto', padding: '30px', minWidth: '250px' }} />
                        </div>
                        <div style={{ overflow: 'auto', width: '70%', color: 'white', marginLeft: '0', marginRight: '5vw', minWidth: "300px", display: 'flex', alignItems: 'center'}}>
                            <div>
                                <br />
                                <h1>{theTitle}</h1>
                                <br />
                                <div><h2 style={{ fontWeight: 'bold' }}>Overview:</h2> <br />
                                    {overview}
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div style = {{width:'100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end',color:"white"}}>
                        <div style ={{display:'flex',paddingRight:'5vw'}}>{modal}</div>
                    </div>
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

export default connect(mapStateToProps, null)(MovieQue)
