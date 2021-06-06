const Button = (props) => {
    const { value, color = 'button is-info', loading } = props;
    return <button className={`${color} ${loading ? 'is-loading' : ''}`}>{value}</button>;
};

export default Button;
