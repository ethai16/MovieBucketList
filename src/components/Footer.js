import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
                <div style = {{width:'100vw', height:'10vh',backgroundColor: 'rgba(0,0,0,.85)',display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    <h2 style = {{color:'white'}}>Made with <a href = "https://www.themoviedb.org/">TMDB</a></h2>
                </div>
        );
    }
}



export default Footer
