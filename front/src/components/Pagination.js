import PaginationBulma from 'bulma-pagination-react';
import { useState } from 'react';

const Pagination = (props) => {
    const length = props.length;
    const limit = 10;
    const amountOfTablets = Math.ceil(length / limit);
    const goToPage = props.goToPage;
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page) => {
        goToPage(page);
        setCurrentPage(page);
    };

    return <PaginationBulma pages={amountOfTablets} currentPage={currentPage} onChange={(page) => handleClick(page)} />;
};

export default Pagination;
