import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <html>
    <Head>
      <title>AIDS/LifeCycle SMS</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="/static/stylesheets/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/stylesheets/shards.css" />
      <link rel="stylesheet" href="/static/stylesheets/style.css" />
    </Head>
    <body>
      <Navbar/>
      { props.children }
      <script src="/static/javascripts/jquery-3.2.1.min.js"></script>
      <script src="/static/javascripts/popper.min.js"></script>
      <script src="/static/javascripts/bootstrap.min.js"></script>
    </body>
    </html>
    );
};

export default Layout;