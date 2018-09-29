import express from 'express';
const router = express.Router();

/* GET list of all accounts. */
const getAccounts = router.get('/', (req, res, next) => {
	console.log(123)
});

export default getAccounts;