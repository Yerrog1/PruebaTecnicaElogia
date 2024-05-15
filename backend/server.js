import express from 'express'
import { playerRoutes } from '../backend/routes/player.js'
import { searchRoutes } from './routes/search.js';
import { connectDB } from '../backend/db.js'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

connectDB();
app.use(express.static('../frontend/public'))
app.use(express.json());

app.use('/api/player', playerRoutes);
app.use('/api/search', searchRoutes);
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../frontend/public/index.html'));
});
app.get('/savedPlayers', (req, res) => {
  res.sendFile(join(__dirname, '../frontend/public/savedPlayers.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});