import React, { Component } from "react";

class Cell extends Component {
    constructor(props) {
        super()
        this.state = { color: this.props.value }
         // ...define initial state with a key of 'color' set to the 'value' prop
      }
    
    clickListener = () =>
      this.setState({
          color: '#333'
      })

    render() {
        return (
            <div 
                className="cell" 
                style={{backgroundColor: this.state.color}}
                onClick={this.clickListener}>
            </div>
        );
    }
}


Cell.propTypes = {

};


export default Cell;


