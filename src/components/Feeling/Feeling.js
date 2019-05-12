import React, { Component } from 'react';
import {connect} from 'react-redux';
import Feedback from '../FeedbackReview/FeedbackReview';
import Header from '../Header/Header';
import '../Feeling/Feeling.css';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


class Feeling extends Component {

    state = {
        feeling: 0
    }


    // Get value from input
    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            feeling: event.target.value
        })
    }

    // Function to send value of feeling to the feedbackReducer and will route user to understanding page.
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.feeling !== 0) {
            console.log('in handleSubmit');
            this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
            this.props.history.push('/understanding')
        } else {
            alert('Please select a number between 1 and 5')
        }
    }


    render() {
        return(
            <div>
                <header>
                    <Header />
                </header>
                <h2>How are you feeling today?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="numberField" type="number" name="feeling" min="1" max="5" onChange={this.handleChange} />
                    {/* <TextField
                        // id="standard-number"
                        label="Number"
                        onChange={this.handleChange}
                        min="1" max="5"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    /> */}
                    <Button variant="contained" color="primary" type="submit">Next</Button>
                </form>
                <br/>
                <Feedback />

            </div>
            
        )
    }
}



export default connect()(Feeling);