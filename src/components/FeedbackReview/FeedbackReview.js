import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeedbackReview extends Component {

    submitButton = () => {
        if(this.props.showFeedback.comments !== '') {
            console.log('Submit is clicked');
            return <button>SUBMIT</button>
        } else {
            return <button>INCOMPLETE</button>
        }
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