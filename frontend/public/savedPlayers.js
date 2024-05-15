document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/player')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const savedPlayerCardsContainer = document.getElementById('savedPlayerCardsContainer');
            savedPlayerCardsContainer.innerHTML = '';

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
                savedPlayerCardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading saved players:', error);
        });
});