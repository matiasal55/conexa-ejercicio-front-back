import { useSelector, useDispatch } from 'react-redux';
import { getPhotos, photosSelector } from '../features/photosSlice';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import { recoveryData, token } from '../features/userSlice';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import Table from '../components/Table';
import AdminContent from '../components/AdminContent';

const Photos = () => {
    const dispatch = useDispatch();
    const selector = useSelector(photosSelector);
    const { photosList, serverState, lengthList } = selector;
    const [cookies, setCookies] = useCookies(['loremSession']);
    const cookieSession = cookies.loremSession;
    const tokenData = useSelector(token);
    const history = useHistory();

    useEffect(() => {
        if (!cookieSession) {
            history.push('/');
        }
        dispatch(getPhotos(1, cookieSession));
        if (!tokenData) dispatch(recoveryData(cookieSession));
    }, []);

    return (
        <AdminContent condition={photosList.length > 0} title='Photos' serverState={serverState}>
            <Table theads={['Id', 'Title', 'Image']}>
                {photosList.map((photo) => (
                    <tr key={photo.id}>
                        <td className='is-vcentered'>{photo.id}</td>
                        <td className='is-vcentered'>{photo.title}</td>
                        <td className='is-vcentered'>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </td>
                    </tr>
                ))}
            </Table>
            <Pagination length={lengthList} goToPage={(page) => dispatch(getPhotos(page, cookieSession))} />
        </AdminContent>
    );
};

export default Photos;
