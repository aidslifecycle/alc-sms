const MessageCard = (props) => {
  return (
    <div className="card">
      <h5 className="card-header bg-primary text-white">{ props.title }</h5>
      <div className="card-body">
        <form>
          <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    );
};

export default MessageCard;