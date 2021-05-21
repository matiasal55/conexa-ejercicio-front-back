import Layout from '../components/Layout';
import { getRequest } from '../utils/requestHandler';

const Photos = (props) => {
    return (
        <Layout title='Photos'>
            <h1 className='container'>Photos</h1>
        </Layout>
    );
};

Photos.getInitialProps = async (ctx) => {
    const res = await getRequest('http://localhost:4000/photos');
    return { photos: res.data };
};

export default Photos;
