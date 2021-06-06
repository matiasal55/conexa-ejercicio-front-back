const success = (res, content, status = 200) => {
    res.status(status).json(content);
};

const error = (res, message, status = 400) => {
    res.status(status).json({ message });
};

module.exports = { success, error };
