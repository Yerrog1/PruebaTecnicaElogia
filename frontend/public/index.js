document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = document.getElementById('searchInput').value;

    try {
        if (query.length <= 2) {
            alert('Use more than 2 letters.');
            return;
        }
        const response = await fetch(`/api/search?query=${query}`);
        const data = await response.json();

        const playerCardsContainer = document.getElementById('playerCardsContainer');
        playerCardsContainer.innerHTML = '';

        data.forEach(player => {
            const card = document.createElement('div');
            card.classList.add('player-card');
            card.innerHTML = `
        <img id="playerImage" src="${player.image || '/src/noPlayer.png'} " alt="No available photo">
        <h2 id="playerName">${player.name}</h2>
        <p id="playerNationality"><strong>Nationality:</strong> ${player.nationality}</p>
        <p id="playerBirth"><strong>Date of Birth:</strong> ${player.dateBorn}</p>
        <p id="playerTeam"><strong>Current Team:</strong> ${player.currentTeam}</p>
        <h3>Current Jersey:<h3>
        <img id="playerEquipment" src="${player.equipment || '/src/noJersey.avif'}" alt="Jersey not available">
        <p id="playerId" style="display: none;">${player.playeriD}</p>
      `;
            playerCardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error searching and displaying players:', error);
        alert('The player is not found in the database.')
    }
});

document.getElementById('saveButton').addEventListener('click', function () {

    const playerCards = document.querySelectorAll('.player-card');
    if (playerCards.length === 0) {
        alert('No player cards to save.');
        return;
    }
    const allPlayers = [];
    playerCards.forEach(async card => {
        const playerId = card.querySelector('#playerId').textContent
        const playerImage = card.querySelector('#playerImage').getAttribute('src')
        const playerName = card.querySelector('#playerName').textContent
        const playerNationality = card.querySelector('#playerNationality').textContent.replace('Nationality: ', '')
        const playerBirth = card.querySelector('#playerBirth').textContent.replace('Date of Birth: ', '')
        const playerTeam = card.querySelector('#playerTeam').textContent.replace('Current Team: ', '')
        const playerEquipment = card.querySelector('#playerEquipment').getAttribute('src')

        const currentPlayer = {
            playerId,
            image: playerImage,
            name: playerName,
            nationality: playerNationality,
            dateBorn: playerBirth,
            currentTeam: playerTeam,
            equipment: playerEquipment
        };
        try {
            const response = await fetch('/api/player', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentPlayer)
            });

        } catch (error) {
            console.error('Error adding player to database:', error);
        }
    });
    alert('Players have been saved successfully');

});