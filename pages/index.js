import Layout from '../components/Layout';
import GroupsSidebar from '../components/GroupsSidebar';
import ChannelFeed from '../components/ChannelFeed';
import Link from 'next/link';

const Index = () => {
	return (<Layout>
           <div className="container">
			 <div className="row">
				 <GroupsSidebar />
				 <ChannelFeed />
             </div>
           </div>
         </Layout>);
};

export default Index;