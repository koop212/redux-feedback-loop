import React, {Component} from 'react';
import {connect} from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';
import Header from '../Header/Header';
import '../Comments/Comments.css';
import Button from '@material-ui/core/Button';



class Comments extends Component {

    state = {
        comments: ''
    }

    // Get value from input
    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            comments: event.target.value
        })
    }

    // Function to send value of comments to the feedbackReducer and will route user to feedback page.
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.comments !== '') {
            console.log('in handleSubmit');
            this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
            this.props.history.push('/feedback')
        } else {
            alert('Please leave a comment to continue')
        }
    }


    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="commentsField" type="text" name="comments" onChange={this.handleChange} />
                    <Button variant="contained" color="primary" type="submit">Next</Button>
                </form>
                <br />
                <Feedback />
            </div>
        )
    }
}



export default connect()(Comments);