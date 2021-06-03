import { useSelector, useDispatch } from 'react-redux';
import { photosList, getPhotos, lengthList, serverState } from '../features/photosSlice';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import InternalError from '../components/InternalError';
import { recoveryData, token } from '../features/userSlice';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';

const Photos = () => {
    const dispatch = useDispatch();
    const [cookies, setCookies] = useCookies(['loremSession']);
    const cookieSession = cookies.loremSession;
    const photos = useSelector(photosList);
    const lengthPhotos = useSelector(lengthList);
    const server = useSelector(serverState);
    const tokenData = useSelector(token);
    const history = useHistory();

    useEffect(() => {
        if (!cookieSession) {
            history.push('/');
        }
        dispatch(getPhotos(1, cookieSession));
        if (!tokenData) dispatch(recoveryData(cookieSession));
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
            <Pagination length={lengthPhotos} goToPage={(page) => dispatch(getPhotos(page, cookieSession))} />
        </div>
    );

    return (
        <div>
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
        </div>
    );
};

export default Photos;
