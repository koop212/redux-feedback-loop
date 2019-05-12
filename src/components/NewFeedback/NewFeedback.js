import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewFeedback extends Component {


    newFeedback = () => {
        this.props.history.push('/')
    }


    render() {
        return (
            <>
                <div>
                    <h2>You have submitted your feedback!</h2>
                </div>

                <div>
                    <h2>Thank You!</h2>
                    <button onClick={this.newFeedback}>Leave New Feedback</button>
                </div>
            </>
        )
    }
}


export default connect()(NewFeedback);