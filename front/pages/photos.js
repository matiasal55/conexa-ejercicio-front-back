import { useSelector, useDispatch } from 'react-redux';
import { photosList, getPhotos, lengthList } from '../features/photosSlice';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const Photos = (props) => {
    const dispatch = useDispatch();
    const photos = useSelector(photosList);
    const lengthPhotos = useSelector(lengthList);

    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    const table = () => {
        return (
            <div>
                <table className='table mt-5 is-hoverable is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {photos.map((photo) => (
                            <tr key={photo.id}>
                                <td className='is-vcentered'>{photo.id}</td>
                                <td className='is-vcentered'>{photo.title}</td>
                                <td className='is-vcentered'>
                                    <img src={photo.thumbnailUrl} alt={photo.title} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination length={lengthPhotos} goToPage={(page) => dispatch(getPhotos(page))} />
            </div>
        );
    };

    return (
        <Layout title='Photos'>
            <h1 className='is-size-1'>Photos</h1>
            {photos.length > 0 ? table() : <Spinner />}
        </Layout>
    );
};

export default Photos;
