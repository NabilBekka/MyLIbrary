import '../styles/styles.css';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../lib/redux/store';

export default function App({ Component, pageProps }) {
    return  (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
        
    )
  }