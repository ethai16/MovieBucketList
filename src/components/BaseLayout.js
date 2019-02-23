import React from 'react';
import MyNavbar from './Navbar'

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <MyNavbar />
                {this.props.children}
            </div>
        );
    }
}


export default BaseLayout
