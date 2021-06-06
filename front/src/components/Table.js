const Table = (props) => {
    const { theads, children } = props;

    return (
        <table className='table mt-5 is-hoverable is-fullwidth'>
            <thead>
                <tr>
                    {theads.map((title) => (
                        <th>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};

export default Table;
