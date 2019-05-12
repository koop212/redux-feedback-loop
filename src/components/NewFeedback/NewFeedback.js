import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewFeedback extends Component {

    // Function to send user back to main page and add another feedback.
    newFeedback = () => {
        this.props.history.push('/')
    }


    render() {
        return (
            <>
                <div>
                    <h2>You have submitted your feedback!</h2>
                </div>
                <br/>
                <div>
                    <h2>Thank You!</h2>
                    <button onClick={this.newFeedback}>Leave New Feedback</button>
                </div>
            </>
        )
    }
}


export default connect()(NewFeedback);