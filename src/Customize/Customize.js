import React, { Component } from 'react';
// import './Customize.css';
import CustomizeOption from '../CustomizeOption/CustomizeOption';


class Customize extends Component {
    render() {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomizeOption 
                features={this.props.features}
                selected={this.props.selected}
                handleUpdate={this.props.handleUpdate}/>
        </form>
    );
  }
}

export default Customize;