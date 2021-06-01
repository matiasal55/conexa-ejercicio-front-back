const { model, Schema } = require('mongoose');
const { encryptKey } = require('../middlewares/encrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', async function () {
    this.password = await encryptKey(this.password);
});

const userModel = model('User', userSchema);

module.exports = userModel;
