
import mongoose from 'mongoose';
// Definición del esquema para los jugadores
const playerSchema = new mongoose.Schema({
  playerId: { type: String, required: true },
  image: { type: String },
  name: { type: String, required: true },
  nationality: { type: String, required: true },
  dateBorn: { type: String, required: true },
  currentTeam: { type: String, required: true },
  equipment: { type: String }
});

export const Player = mongoose.model('Player', playerSchema);

