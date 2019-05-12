import React, { Component } from 'react';


class Feeling extends Component {
    state = {
        feeling: 0
    }

    handleChange = (event) => {
        console.log('In handleChange', this.state);
        this.setState({
            feeling: event.target.value
        })
    }

    

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="feeling" onChange={this.handleChange} />
                    <button type="submit">Next</button>
                </form>

            </div>
            
        )
    }
}

export default Feeling;