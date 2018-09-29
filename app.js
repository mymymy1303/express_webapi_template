import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

// Gọi Route

import * as accountRouter from './routes/account.routes/account.routes'
import * as billRouter from './routes/bill.routes/bill.routes'
import * as guestRouter from './routes/guest.routes/guest.routes'
import * as roomRouter from './routes/room.routes/room.routes'
import * as userRouter from './routes/user.routes/user.routes'


// Khởi tạo APP
const app = express();


// Call DB //////////////////////
// const Schema = mongoose.Schema
// const __data = 'mongodb://localhost:27017/';
// mongoose.connect(__data, {
// 	useNewUrlParser: true
// });
// // Global
// mongoose.Promise = global.Promise;
// //Lấy kết nối mặc định
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Lỗi kết nối CSDL'));
// Call DB //////////////////////


// Cấu hình
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());


// Init App
app.use('/account', [accountRouter.getAccounts, accountRouter.getSingleAccount, accountRouter.addAccount, accountRouter.updateAccount])

app.use('/bill', [billRouter.getBills, billRouter.getSingleBill, billRouter.addBill, billRouter.updateBill])

app.use('/guest', [guestRouter.getGuests, guestRouter.getSingleGuest, guestRouter.addGuest, guestRouter.updateGuest])

app.use('/room', [roomRouter.getRooms, roomRouter.getSingleRoom, roomRouter.addRoom, roomRouter.updateRoom])

app.use('/user', [userRouter.getUsers, userRouter.getSingleUser, userRouter.addUser, userRouter.updateUser])

// catch 404 and forward to error handler
app.use((req, res, next) => {
	if (req.app.get('env') === 'development') {
		next(createError(404));
	} else {
		res.status(400);
		res.send({
			'message': 'Unknown URL'
		})
	}
});

// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.status(err.status || 500);
	res.send({
		'message': 'Oops, an error occurs',
		'error': err.message
	})
});

export default app