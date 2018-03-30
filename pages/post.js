import Layout from '../components/Layout';
import GroupsSidebar from '../components/GroupsSidebar';
import ChannelFeed from '../components/ChannelFeed';

const Post = (props) => {

  return (<Layout>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>{ props.url.query.title }</h2>
                  <div className="row">
                    <ChannelFeed />
                  </div>
                </div>
              </div>
            </div>
          </Layout>);
};

export default Post;