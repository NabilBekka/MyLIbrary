import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { linkAction } from "../lib/redux/features/link/linkSlice";
import { searchAction } from "../lib/redux/features/search/searchSlice";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(linkAction(''));
      dispatch(searchAction(''));
    },[]);
    return (<div data-testid="home" >
      <Head>
        <title>MY LIBRARY</title>
      </Head>
    </div>)
};

export default Home;