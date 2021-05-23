import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { photosList, getPhotos, lengthList, serverState } from '../features/photosSlice';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import InternalError from '../components/InternalError';
import { cookieProvider } from '../utils/cookieProvider';

const Photos = () => {
    const dispatch = useDispatch();
    const cookieSession = cookieProvider('conexaSession');
    const photos = useSelector(photosList);
    const lengthPhotos = useSelector(lengthList);
    const server = useSelector(serverState);
    const router = useRouter();

    useEffect(() => {
        if (!cookieSession) {
            router.push('/');
        }
        dispatch(getPhotos(1, cookieSession));
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

    return (
        <Layout title='Photos'>
            {photos.length > 0 ? (
                <>
                    <h1 className='is-size-1'>Photos</h1>
                    {table()}
                </>
            ) : server ? (
                <Spinner />
            ) : (
                <InternalError />
            )}
        </Layout>
    );
};

export default Photos;
