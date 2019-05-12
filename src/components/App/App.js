import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Feedback from '../FeedbackReview/FeedbackReview';
import { HashRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {

  submitFeedback = (feedback) => {
    axios({
      method: 'POST',
      url: '/api/feedback',
      data: feedback
    }).then(response => {
      console.log(response);
      this.props.dispatch({type: 'CLEAR_FEEDBACK'})      
    }).catch(error => {
      console.log('Error in submitFeedback', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <br />
        <Router>
          <Route exact path = '/' component = {Feeling} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/feedback' render={(props) => <Feedback {...props} submitFeedback={this.submitFeedback} />} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
