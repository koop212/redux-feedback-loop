import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';
import Header from '../Header/Header';
import '../Understanding/Understanding.css'
import Button from '@material-ui/core/Button';



class Understanding extends Component {

    state = {
        understanding: 0
    }

    // Get value from input
    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            understanding: event.target.value
        })
    }

    // Function to send value of understanding to the feedbackReducer and will route users to support page
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.understanding !== 0) {
            console.log('in handleSubmit');
            this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
            this.props.history.push('/support')
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
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="understandingField" type="number" name="understanding" min="1" max="5" onChange={this.handleChange} />
                    <Button variant="contained" color="primary" type="submit">Next</Button>
                </form>
                <br />
                <Feedback />
            </div>
        )
    }
}

export default connect()(Understanding);