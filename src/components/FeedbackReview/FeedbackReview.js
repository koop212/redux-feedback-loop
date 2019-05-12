import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeedbackReview extends Component {

    // Button will show Submit only if Comments has a value, otherwise it will show INCOMPLETE
    submitButton = () => {
        if(this.props.showFeedback.comments !== '') {
            console.log('Submit is clicked');
            return <button onClick={this.handleSubmit}>SUBMIT</button>
        } else {
            return <button>INCOMPLETE</button>
        }
    }

    // Will send feedback to database and route user to newfeedback page
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitFeedback(this.props.showFeedback);
        this.props.history.push('/newfeedback')
    }

    render() {
        return(
            <div>
                <h2>Review your feedback</h2>
                <p>Feeling: {this.props.showFeedback.feeling}</p>
                <p>Understanding: {this.props.showFeedback.understanding}</p>
                <p>Support: {this.props.showFeedback.support}</p>
                <p>Comments: {this.props.showFeedback.comments}</p>
                {this.submitButton()}
            </div>
        )
    }
}




const mapStateToProps = (reduxState) => {
    return {
        showFeedback : reduxState.feedbackReducer
    }
}

export default connect(mapStateToProps)(FeedbackReview);