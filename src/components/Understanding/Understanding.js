import React, {Component} from 'react';
import {connect} from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';


class Understanding extends Component {

    state = {
        understanding: 0
    }

    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            understanding: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
    }


    render() {
        return(
            <div>
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="feeling" min="1" max="5" onChange={this.handleChange} />
                    <button type="submit">Next</button>
                </form>
                <br />
                <Feedback />

            </div>
        )
    }
}

export default connect()(Understanding);