import React from 'react';

class MessageForm extends React.Component {

  alertOnClick(e) {
    e.preventDefault();
  }

  render () {
    return (<div className="card">
      <h5 className="card-header bg-primary text-white">{ this.props.title }</h5>
      <div className="card-body">
        <form>
          <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e)=>this.alertOnClick(e)}>Submit</button>
        </form>
      </div>
    </div>)
  }
};

export default MessageForm;