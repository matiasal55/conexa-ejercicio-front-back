import Layout from '../components/Layout';
import { getRequest } from '../utils/requestHandler';

const Photos = (props) => {
    const photos = props.photos;
    const table = () => {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((photo) => {
                        <tr>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>
        );
    };
    return (
        <Layout title='Photos'>
            <h1 className='container'>Photos</h1>
            {photos ? table() : <h2>No hay fotos</h2>}
        </Layout>
    );
};

Photos.getInitialProps = async (ctx) => {
    const res = await getRequest('http://localhost:4000/photos');
    return { photos: res.photos };
};

export default Photos;
