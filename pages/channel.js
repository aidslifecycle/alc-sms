import Layout from '../components/Layout';
import GroupsSidebar from '../components/GroupsSidebar';
import ChannelFeed from '../components/ChannelFeed';

const Channel = (props) => {
  return (<Layout>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>{ props.title }</h2>
                  <div className="row">
                    <ChannelFeed />
                  </div>
                </div>
              </div>
            </div>
          </Layout>);
};

Channel.getInitialProps = async function (context) {
  // @todo: Fix title when page refreshes on a channel
  const title = context.query.title || "AIDS/LifeCycle";
  console.log("Context", title);
  return {
    title: title
  }
}

export default Channel;