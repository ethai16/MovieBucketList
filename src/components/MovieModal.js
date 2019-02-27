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
    if(this.props.movie.id !== undefined){
      window.location.href = `/movie/${this.props.movie.id}`
    }
  }


  render() {
    const { fullScreen } = this.props;
    var imagePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
    imagePath += this.props.movie.poster_path
  
    return (
      <div>
        <div>
        <Button variant= "contained" color="primary" onClick={this.handleClickOpen}>
        
          {this.props.text}
        </Button>
        </div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title"><h2 style = {{fontWeight:'bold', fontSize: '24px'}}>{this.props.movie.title}</h2><h2>{this.props.movie.release_date}</h2></DialogTitle>
          <DialogContent>
            <div className = "flex">
            <img src={imagePath} style = {{height:'300px'}}/> 
            <div style = {{marginRight:'15px', marginLeft:'15px', fontColor:'black'}}>
                <p>{this.props.movie.overview}</p>
            </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant = "contained" color="primary">
              Close
            </Button>
            <Button onClick={this.goToPage} variant = "contained" color="primary" autoFocus>
              Movie Page
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