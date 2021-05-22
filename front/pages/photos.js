import { useSelector, useDispatch } from 'react-redux';
import { photosList, getPhotos } from '../features/photosSlice';
import Layout from '../components/Layout';
import { useEffect } from 'react';

const Photos = (props) => {
    const dispatch = useDispatch();
    const photos = useSelector(photosList);

    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    const table = () => {
        return (
            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((photo) => (
                        <tr>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };
    return (
        <Layout title='Photos'>
            <h1 className='container'>Photos</h1>
            {photos.length > 0 ? table() : <h2>No hay fotos</h2>}
        </Layout>
    );
};

export default Photos;
