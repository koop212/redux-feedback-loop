import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';


class Support extends Component {

    state = {
        Support: 0
    }

    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            Support: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.Support })
    }


    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="support" min="1" max="5" onChange={this.handleChange} />
                    <button type="submit">Next</button>
                </form>
                <br />
                <Feedback />

            </div>
        )
    }
}

export default connect()(Support);