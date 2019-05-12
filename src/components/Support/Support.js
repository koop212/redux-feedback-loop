import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';


class Support extends Component {

    state = {
        support: 0
    }

    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            support: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.support !== 0) {
            console.log('in handleSubmit');
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
            this.props.history.push('/comments')
        } else {
            alert('Please select a number between 1 and 5')
        }
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