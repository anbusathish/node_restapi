import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

    console.log('Hi Login page');
    res.send('This is login page');
})

export default router;