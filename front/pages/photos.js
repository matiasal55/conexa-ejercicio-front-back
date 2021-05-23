import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { photosList, getPhotos, lengthList, serverState } from '../features/photosSlice';
import { token } from '../features/userSlice';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import InternalError from '../components/InternalError';

const Photos = (props) => {
    const dispatch = useDispatch();
    const photos = useSelector(photosList);
    const lengthPhotos = useSelector(lengthList);
    const server = useSelector(serverState);
    const userToken = useSelector(token);
    const router = useRouter();

    useEffect(() => {
        dispatch(getPhotos(1, userToken));
    }, []);

    const table = () => (
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

    if (!userToken) {
        router.push('/');
    }

    return (
        <Layout title='Photos'>
            <h1 className='is-size-1'>Photos</h1>
            {photos.length > 0 ? table() : server ? <Spinner /> : <InternalError />}
        </Layout>
    );
};

export default Photos;
