import React from 'react';

class MessageForm extends React.Component {

  sendMessage(event) {
    event.preventDefault();

    fetch('/api/message/test', {
      method: 'POST',body: {'message': 'hello'},headers: {'content-type': 'application/json'}
    }).then(res => {
      return res.json();
    }).then(firebase => {
      console.log(firebase);
    });
  }

  render() {
    return (<div className="card">
              <h5 className="card-header bg-primary text-white">{ this.props.title }</h5>
              <div className="card-body">
                <form action="/" method="post" onSubmit={ (event) => {
                                                           this.sendMessage(event);
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