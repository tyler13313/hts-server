import express from 'express';
import schoolController from './school.controller';
import stockItemcontroller from './stockItem.controller';

const router = express.Router();

router.use('/schools', schoolController);

router.use('./stock', stockItemcontroller);

export default router;
