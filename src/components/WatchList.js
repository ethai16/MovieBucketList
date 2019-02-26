import React from 'react';
import {connect} from 'react-redux';
import WatchListMovie from './WatchListMovie'


class WatchList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var listMovies;
        if(this.props.watchList !== undefined && this.props.watchList.length ){
            if(this.props.watchList.length !== 0){
                listMovies = this.props.watchList.map(movie => {
                    return <WatchListMovie movie = {movie} />
                })
            }
        }
        return (
            <div style = {{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {listMovies}
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