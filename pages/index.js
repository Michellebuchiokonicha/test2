import Head from "next/head";
// import Layout from "./components/Layout";
// import Hero from "./components/Hero";
import css from '../styles/Home.module.css'
import Layout from "./components/Layout";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap';


export default function Home({ pizzas }) {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Girls like me</title>
          <meta name="description" content="Hello Me Money" />
          {/* <link rel="icon" href="/Logo.png" /> */}
        </Head>
        {/* body */}
        <main>
          {/* <Hero /> */}
          {/* <Services />
          <Menu pizzas={pizzas} /> */}
        </main>
      </div>
    </Layout>

  );
}


