import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';
import Header from '../Header/Header';
import '../Support/Support.css'
import Button from '@material-ui/core/Button';



class Support extends Component {

    state = {
        support: 0
    }

    // Get value from input
    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            support: event.target.value
        })
    }

    // Function to send value of support to the feedbackReducer and will route user to comments page.
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
                <header>
                    <Header />
                </header>
                <h2>How well are you being supported?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="supportField" type="number" name="support" min="1" max="5" onChange={this.handleChange} />
                    <Button variant="contained" color="primary" type="submit">Next</Button>
                </form>
                <br />
                <Feedback />
            </div>
        )
    }
}

export default connect()(Support);