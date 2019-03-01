import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };

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


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    combineFunctionArchive = (type) => {
        this.props.onAddMovieArchive(this.props.movie)
        this.handleClose();
        this.createNotification(type)
    }

    combineFunctionWatchList= (type) => {
        this.props.onAddMovieWatchList(this.props.movie)
        this.handleClose();
        this.createNotification(type)
    }

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
                    <MenuItem onClick={()=>this.combineFunctionWatchList('watchList')}
                    >Add To Watch List</MenuItem>
                    <MenuItem  onClick={()=>{this.combineFunctionArchive('archive')}}>
                     Add To Archive
                    </MenuItem>
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