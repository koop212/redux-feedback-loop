import React, {Component} from 'react';
import {connect} from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';
class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.comments !== '') {
            console.log('in handleSubmit');
            this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        } else {
            alert('Please leave a comment to continue')
        }
    }


    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="comments" onChange={this.handleChange} />
                    <button type="submit">Next</button>
                </form>
                <br />
                <Feedback />
            </div>
        )
    }
}



export default connect()(Comments);