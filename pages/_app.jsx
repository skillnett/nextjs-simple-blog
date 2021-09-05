import '../styles/globals.scss';
import { wrapper } from '../store/store';
import { AppHead } from '../components/shared/AppHead';

const BlogApp = ({ Component, pageProps }) => (
    <>
        <AppHead />
        <Component {...pageProps} />
    </>
);

export default wrapper.withRedux(BlogApp);
