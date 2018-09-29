import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	key: String,
	username: String,
	email: String,
	hash: String
}, {
	timestamps: true,
	collection: 'users'
})

const User = mongoose.model('User', userSchema)

User.getAll = () => {
	return User.find({})
}

export default User
