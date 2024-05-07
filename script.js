const teamMembers = [
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography: 'Argentinian soccer player that is looked at as one of the best in history.'
    },
    {
        name: 'Lionel Messi Jr.',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is an Argentinian soccer player that is considered as one of the best in history.'
    },
]

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
    
        //styling card based on position:
        let backgroundColor
    
        switch (member.position.toLowerCase()) {
          case 'forward':
            backgroundColor = '#ffc107' // Yellow for forwards
            break
          case 'midfielder':
            backgroundColor = '#28a745' // Green for midfielders
            break
          case 'defender':
            backgroundColor = '#007bff' // Blue for defenders
            break
          case 'goalkeeper':
            backgroundColor = '#dc3545' // Red for goalkeepers
            break
          default:
            backgroundColor = '#6c757d' // Gray for other positions
        }
        card.style.backgroundColor = backgroundColor
    
        //Create a list of Skills with <li> tags
        const skillsList = member.skills
          .map(skill => `<li> ${skill} </li>`).join('')
    
        card.innerHTML = `
                <div class = "card">
                    <div class = "card-header"> ${member.name}</div>
                    <div class = "card-body">
                        <p><strong>Position:</strong> ${member.position}</p>
                        <p><strong>Skills:</strong> 
                            <ul>
                                ${skillsList}
                            </ul>
                        </p>
                        <p><strong>Strengths:</strong> ${member.strengths}</p>
                        <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                        <p><strong>Biography:</strong> ${member.biography}</p>
                    </div>
                </div>
            `
    
        teamCardsContainer.appendChild(card)
      })
    }
    
    window.onload = generateTeamCards()