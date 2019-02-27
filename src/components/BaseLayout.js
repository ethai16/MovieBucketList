import React from 'react';
import MyNavbar from './Navbar'
import Footer from './Footer'

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <MyNavbar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}


export default BaseLayout
