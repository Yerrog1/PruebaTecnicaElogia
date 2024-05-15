import { Player } from '../models/player.js';

export const playerGet = async (req, res = response) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const playerPost = async (req, res = response) => {
  const { playerId, image, name, nationality, dateBorn, currentTeam, equipment } = req.body
  const existingPlayer = await Player.findOne({ playerId });

  if (existingPlayer) {
    return res.status(400).json({ error: 'Player with the same playerId already exists.' });
  }
  const player = new Player({ playerId, image, name, nationality, dateBorn, currentTeam, equipment })
  await player.save()
  res.json({
    player
  })
}