import express from 'express'
import { searchPlayer } from '../controllers/search.js';
export const searchRoutes = express.Router();

searchRoutes.get('/', searchPlayer)

