const MessageCard = (props) => {
  return (
    <div className="card">
      <h5 className="card-header message">{ props.title }</h5>
      <div className="card-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>
    </div>
    );
};

export default MessageCard;