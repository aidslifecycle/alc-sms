import Layout from '../components/Layout';
import GroupsSidebar from '../components/GroupsSidebar';
import ChannelFeed from '../components/ChannelFeed';

const Post = (props) => {

  return (<Layout>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h1>{ props.url.query.title }</h1>
                  <p>This is the
                    { props.url.query.title } page</p>
                  <div className="row">
                    <GroupsSidebar />
                    <ChannelFeed />
                  </div>
                </div>
              </div>
            </div>
          </Layout>);
};

export default Post;