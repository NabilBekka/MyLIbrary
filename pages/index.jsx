import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { linkAction } from "../lib/redux/features/link/linkSlice";
import { searchAction } from "../lib/redux/features/search/searchSlice";
import { useRouter } from "next/router";

const Home = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const search = useSelector( state => state.search.search);
    const [firstRender, setFirstRender] = useState(true);
    
    useEffect(() => {
      if (firstRender){
        dispatch(linkAction(''));
        dispatch(searchAction(''));
        setFirstRender(false);
      } else {
        if (search !== ''){
          router.push({
            pathname: 'movies',
            query: {
              search
            }
          })
        }
      }
    },[search, firstRender]);
    return (<div data-testid="home" >
      <Head>
        <title>MY LIBRARY</title>
      </Head>
    </div>)
};

export default Home;