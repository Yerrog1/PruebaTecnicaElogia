import axios from 'axios';

export const searchPlayer = async (req, res = response) => {
  try {
    const { query } = req.query
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${query}`)
    console.log(response)

    const allPlayers = response.data.player
    console.log(allPlayers)
    if (allPlayers === null) {
      return res.status(500).json({ message: 'Player not found' })
    }
    const soccerPlayers = allPlayers.filter(player => player.strSport === 'Soccer').slice(0, 5)

    const playerPromises = soccerPlayers.map(async player => {
      const equipment = await getEquipment(player.idTeam)
      return {
        playeriD: player.idPlayer,
        name: player.strPlayer,
        nationality: player.strNationality,
        dateBorn: player.dateBorn,
        currentTeam: player.strTeam === '_Retired Soccer' ? 'Retirado' : player.strTeam === '_Deceased Soccer' ? 'Fallecido' : player.strTeam,
        image: player.strThumb,
        equipment: equipment
      }
    })
    const formattedPlayers = await Promise.all(playerPromises)
    res.json(formattedPlayers)
  } catch (error) {
    console.error('Error searching for players:', error);
    res.status(500).json({ message: 'Error searching for players' });
  }
}
const getEquipment = async (teamId) => {
  try {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=${teamId}`);
    const equipmentData = response.data.equipment
    if (equipmentData != null) {
      const lastEquipment = equipmentData[equipmentData.length - 1]
      return lastEquipment.strEquipment
    } else
      return equipmentData;
  } catch (error) {
    console.error('Error searching for equipment:', error);
    return [];
  }
};