import express from 'express'
import { playerGet, playerPost } from '../controllers/player.js';

export const playerRoutes = express.Router();

playerRoutes.get('/', playerGet);
playerRoutes.post('/', playerPost);
