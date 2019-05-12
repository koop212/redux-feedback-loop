import React, { Component } from 'react';
import {connect} from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';

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

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling})
        this.props.history.push('/understanding')
    }


    render() {
        return(
            <div>
                <h2>How are you feeling today?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="feeling" min="1" max="5" onChange={this.handleChange} />
                    <button type="submit">Next</button>
                </form>
                <br/>
                <Feedback />

            </div>
            
        )
    }
}

export default connect()(Feeling);