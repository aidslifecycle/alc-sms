import React from 'react';

class MessageForm extends React.Component {

  sendMessage(event) {
    //event.preventDefault();
    
  }

  render() {
    return (<div className="card">
              <h5 className="card-header bg-primary text-white">{ this.props.title }</h5>
              <div className="card-body">
                <form action="sms/test" method="post" onClick={ (e) => {
                                                                  this.sendMessage(e);
                                                                } }>
                  <div className="form-group">
                    <textarea className="form-control" name="message" id="message" rows="3" placeholder="Enter a message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>);
  }
}

export default MessageForm;