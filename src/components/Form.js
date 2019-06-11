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
      success: "",
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
        return this.setState({success: response});
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  }


  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let { success } = this.state;
    let formContents;
    if (success != '200') {
      formContents = (
          <form onSubmit={this.handleForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={this.handleFields} />

            <label htmlFor="attending">Will You Be Attending?</label>
            <input type="radio" name="attending" value="yes" onChange={this.handleFields}/> <span>Yes 🎉</span> <br/>
            <input type="radio" name="attending" value="no" onChange={this.handleFields}/> <span>No </span>

            <label htmlFor="rsvp">How Many People Will You Bring?</label>
            <input type="number" id="rsvp" name='rsvp' onChange={this.handleFields}></input>

            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" onChange={this.handleFields}></textarea>

            <button type="submit" >Send</button>
          </form>
        )
    } else {
      formContents = (<div>Your RSVP has been successfully submitted!</div>)
    }
    return (
      <div className={'form'}>
        {formContents}
      </div>
    
    );
  }
}

export default Form;