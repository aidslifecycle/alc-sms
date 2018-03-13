const MessageCard = (props) => {
	return (
		<div className="card">
    <h5 className="card-header message">{ props.title }</h5>
    <div className="card-body">
      <h5 className="card-title">Lorem ipsum dolor sit amet consectetur</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in distinctio reiciendis perspiciatis et dignissimos odit magnam accusamus architecto perferendis
        autem necessitatibus.</p>
    </div>
  </div>);
};

export default MessageCard;