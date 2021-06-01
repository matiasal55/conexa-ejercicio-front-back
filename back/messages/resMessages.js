const success = (res, content, status = 200) => {
    res.status(status).json(content);
};

const error = (res, message, status = 400) => {
    res.status(status).json({ message });
};

const possibleNotAutorizedAccess = (res, message, condition) => {
    if (message.includes(condition)) return error(res, 'Not Autorized', 401);
    else return error(res, 'Internal Error', 500);
};

module.exports = { success, error, possibleNotAutorizedAccess };
