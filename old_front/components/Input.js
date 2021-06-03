const Input = (props) => {
    const { label, type = 'text', placeholder, icon, error, register, name, disabled } = props;
    return (
        <div className='field'>
            <label className='label'>{label} </label>
            <div className='control has-icons-left has-icons-right'>
                <input
                    className={`input ${error ? 'is-danger' : ''}`}
                    {...register(name, { required: true })}
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                />
                <span className='icon is-small is-left'>
                    <i className={icon} />
                </span>
                <span className='icon is-small is-right'>{error ? <i className='fas fa-exclamation-triangle' /> : null}</span>
            </div>
            {error ? <p className='help is-danger'>{error.message}</p> : null}
        </div>
    );
};

export default Input;
