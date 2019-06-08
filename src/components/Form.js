import React from "react";
import axios from "axios"; // For making client request.


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      attending: "", 
      rsvp: "", 
      message: "", 
      successfullySubmitted: false,
    };
  }
  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/SZkSGhCm3Ol", 
      this.state, 
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
        formSuccess = response;
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  successMessage = () => {
    if (formSuccess === 200) {
      this.setState({successfullySubmitted: true});
    }
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let { successfullySubmitted } = this.state;
    let formContents;
    let formSuccess;

    if (successfullySubmitted === false) {
      formContents = (
          <form onSubmit={this.handleForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={this.handleFields} />

            <label htmlFor="attending">Will You Be Attending?</label>
            <input type="radio" name="attending" value="yes" onChange={this.handleFields}/> Yes 🎉
            <input type="radio" name="attending" value="no" onChange={this.handleFields}/> No

            <label htmlFor="rsvp">How Many People Will You Bring?</label>
            <input type="number" id="rsvp" name='rsvp' onChange={this.handleFields}></input>

            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" onChange={this.handleFields}></textarea>

            <button type="submit" onClick={this.successMessage}>Send</button>
          </form>
        )
    } else {
      formContents = (<div>Your RSVP has been successfully submitted!</div>)
    }
    return (
      <div>
        {formContents}
      </div>
    
    );
  }
}

export default Form;