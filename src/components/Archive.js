import React from 'react';
import {connect} from 'react-redux';
import ArchiveMovie from './ArchiveMovie'


class WatchList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var listMovies;
        if(this.props.archive !== undefined && this.props.archive.length ){
            if(this.props.archive.length !== 0){
                listMovies = this.props.archive.map(movie => {
                    return <ArchiveMovie movie = {movie} />
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
