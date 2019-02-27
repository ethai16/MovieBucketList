import React, { Component } from 'react';
import MovieSearchPage from './components/MovieSearchPage';
import Background from './components/img/joshua-eckstein-1099605-unsplash.jpg'
import Button from '@material-ui/core/Button'


class App extends Component {
  render() {
    const layer = {
      backgroundColor: 'rgba(0, 0, 0, 0.80)',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
  }

    return (
      <div style = {{backgroundImage:`url(${Background})`, backgroundSize: '100vw', backgroundPosition:'50% 100%', height:'100vh', width:'100vw',position: 'relative'}}>
        <div style = {layer}>
            <h1 style ={{color:'white', marginBotton:'100px'}}>Welcome to The Movie Bucket List!</h1>
            <h2 style = {{color:'white'}}>Discover New Movies And Expand Your Archive</h2>
            <Button href = '/movies/page=1' variant = "contained" color = "primary" style ={{width:'8vw'}}>Discover</Button>
        </div>
      </div>
    );
  }
}

export default App;
