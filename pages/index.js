import Layout from '../components/Layout';
import GroupsSidebar from '../components/GroupsSidebar';
import ChannelFeed from '../components/ChannelFeed';

const Index = () => {
	return (<Layout>
           <div className="container">
             <div className="row">
               <ChannelFeed />
             </div>
           </div>
         </Layout>);
};

export default Index;