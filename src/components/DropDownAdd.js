import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';

class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };
    

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    variant="contained"
                    color="primary"
                    style={{ marginRight: '1vh' }}
                >
                    Add
        </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={()=>{(this.props.onAddMovieWatchList(this.props.movie));(this.handleClose())}}>Add To Watch List</MenuItem>
                    <MenuItem onClick={()=>{(this.props.onAddMovieArchive(this.props.movie));(this.handleClose())}}>Add To Archive</MenuItem>
                </Menu>
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
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMenu);