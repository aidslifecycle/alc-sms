import MessageCard from '../components/MessageCard';
import MessageForm from '../components/MessageForm';
import GroupInfoCard from '../components/GroupInfoCard';

const ChannelFeed = () => {
    var messageArray = [1, 2, 3];

    var cards = messageArray.map((val, index) => {
        return <MessageCard title={ `Test Message ${val}` } key={ index } />;
    });

    return (
        <div className="col-sm-12 col-md-9">
          <div className="row">
            <div className="col-sm-12 col-md-8">
            <MessageForm title="Message Form" />
              { cards }
            </div>
            <div className="col-sm-12 col-md-4 d-none d-sm-block">
              <GroupInfoCard />
            </div>
          </div>
        </div>
        );
};

export default ChannelFeed;