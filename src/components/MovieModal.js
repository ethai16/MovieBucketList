import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import './styles/MovieModal.css'

class ResponsiveDialog extends React.Component {

  state = {
    open: false,
    
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  goToPage = () => {
    this.setState({ open: false });
    window.location.href = `/movie/${this.props.movie.id}`
  }


  render() {
    const { fullScreen } = this.props;
    var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
    imagePath += this.props.movie.poster_path

    return (
      <div>
        <Button style = {{}} variant="outlined" color="primary" style = {{marginRight: '3px'}}>+</Button>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          More info
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.props.movie.title} ({this.props.movie.release_date})</DialogTitle>
          <DialogContent>
            <div className = "flex">
            <img src={imagePath} style = {{height:'300px'}}/> 
            <DialogContentText>
                {this.props.movie.overview}
            </DialogContentText>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.goToPage} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);