import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
    state = {
        feeling: 0
    }

    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            feeling: event.target.value
        })
    }

    handleSubmit = () => {
        console.log('in handleSubmit');
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="feeling" onChange={this.handleChange} />
                    <button type="submit">Next</button>
                </form>

            </div>
            
        )
    }
}

export default connect()(Feeling);