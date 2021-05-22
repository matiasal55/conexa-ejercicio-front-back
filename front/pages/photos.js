import { useSelector, useDispatch } from 'react-redux';
import { photosList, getPhotos, lengthList } from '../features/photosSlice';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';

const Photos = (props) => {
    const dispatch = useDispatch();
    const photos = useSelector(photosList);
    const lengthPhotos = useSelector(lengthList);

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
            <Pagination length={lengthPhotos} goToPage={(page) => dispatch(getPhotos(page))} />
        </Layout>
    );
};

export default Photos;
