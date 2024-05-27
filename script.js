const teamMembers = [
  {
    img: "images/ad.png",
    name: "Aaron Donald",
    position: "DL",
    skills: ["Pass Rush", "Stopping the run", "Playing the gap"],
    strengths: "Pass Rush",
    weaknesses: "Smaller Size",
    biography:
      "Aaron Donald was a star defensive tackle for the Los Angeles Rams, is a dominant force on the field, known for his quickness, strength, and disruptive impact in both pass rushing and run defense.",
  },
  {
    img: "images/jw.png",
    name: "JJ Watt",
    position: "DL",
    skills: ["Pass Rush", "Stopping the run", "Playing the gap"],
    strengths: "Stopping the run",
    weaknesses: "Consistency",
    biography:
      "JJ Watt is a former NFL defensive end known for his exceptional athleticism, charitable work, and dominance on the field, primarily with the Houston Texans.",
  },
  {
    img: "images/nb.png",
    name: "Nick Bosa",
    position: "DL",
    skills: ["Pass Rush", "Stopping the run", "Speed"],
    strengths: "Pass Rush",
    weaknesses: "Injuries",
    biography:
      "Nick Bosa is a dominant NFL defensive end for the San Francisco 49ers, known for his relentless pass-rushing skills, earning him accolades such as the NFL Defensive Rookie of the Year in 2019.",
  },
  {
    img: "images/jb.png",
    name: "Joey Bosa",
    position: "DL",
    skills: ["Pass Rush", "Stopping the run", "Speed"],
    strengths: "Size",
    weaknesses: "Injuries",
    biography:
      "Joey Bosa is a standout NFL defensive end for the Los Angeles Chargers, celebrated for his exceptional pass-rushing prowess and consistency, earning multiple Pro Bowl selections.",
  },
  {
    img: "images/rl.png",
    name: "Ray Lewis",
    position: "LB",
    skills: ["Tackling", "Stopping the run", "Filling gaps"],
    strengths: "Tackling",
    weaknesses: "Injuries",
    biography:
      "Ray Lewis is a former NFL linebacker renowned for his leadership, tenacity, and impact on the field during his 17-year career with the Baltimore Ravens, where he earned two Super Bowl titles and numerous accolades.",
  },
  {
    img: "images/vm.png",
    name: "Von Miller",
    position: "LB",
    skills: ["Pass Rush", "Speed", "Playing the gap"],
    strengths: "Pass Rush",
    weaknesses: "Smaller Size",
    biography:
      "Von Miller is an elite NFL linebacker recognized for his explosive pass-rushing abilities and significant contributions to the Denver Broncos, including leading them to victory in Super Bowl 50 and earning the game's MVP title.",
  },
  {
    img: "images/br.png",
    name: "Bill Romanowski",
    position: "LB",
    skills: ["Power", "Strength", "Stopping the run"],
    strengths: "Aggression",
    weaknesses: "Craziness",
    biography:
      "Bill Romanowski is a former NFL linebacker known for his intense playing style, durability, and controversial incidents on and off the field during his career with teams like the San Francisco 49ers, Denver Broncos, and Oakland Raiders.",
  },
  {
    img: "images/bw.png",
    name: "Bobby Wagner",
    position: "LB",
    skills: ["Strength", "Speed", "Playing the gap"],
    strengths: "Strength",
    weaknesses: "Injuries",
    biography:
      "Bobby Wagner is an exceptional NFL linebacker recognized for his consistent performance, leadership, and key contributions to the Seattle Seahawks' defense, including their Super Bowl XLVIII victory.",
  },
  {
    img: "images/st.png",
    name: "Sean Taylor",
    position: "DB",
    skills: ["Tackling", "Speed", "Power"],
    strengths: "Tackling",
    weaknesses: "Low years in the league",
    biography:
      "Sean Taylor was a highly talented and hard-hitting NFL safety for the Washington Redskins, remembered for his outstanding athleticism and tragic death at a young age.",
  },
  {
    img: "images/kc.png",
    name: "Kam Chancellor",
    position: "DB",
    skills: ["Tackling", "Speed", "Aggressive play"],
    strengths: "Tackling",
    weaknesses: "Injuries",
    biography:
      "Kam Chancellor is a former NFL strong safety known for his physicality, leadership, and key role in the Seattle Seahawks' \"Legion of Boom\" defense, which helped secure a Super Bowl XLVIII victory.",
  },
  {
    img: "images/jr.png",
    name: "Jalen Ramsey",
    position: "DB",
    skills: ["Tackling", "Speed", "Trash Talk"],
    strengths: "Trash Talk",
    weaknesses: "Fines",
    biography:
      "Jalen Ramsey is a premier NFL cornerback known for his lockdown coverage, versatility, and impactful play with the Jacksonville Jaguars and the Los Angeles Rams, with whom he won Super Bowl LVI.",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    //styling card based on position:
    let backgroundColor;

    switch (member.position.toLowerCase()) {
      case "lb":
        backgroundColor = "#ffc107"; // Yellow for LB
        break;
      case "dl":
        backgroundColor = "#007bff"; // Green for DL
        break;
      case "db":
        backgroundColor = "#28a745"; // Blue for DB
        break;
      default:
        backgroundColor = "#6c757d"; // Gray for other positions
    }
    card.style.backgroundColor = backgroundColor;

    //Create a list of Skills with <li> tags
    const skillsList = member.skills
      .map((skill) => `<li> ${skill} </li>`)
      .join("");

    card.innerHTML = `
                <div class = "card m-2">
                    <img class="text-center" src="${member.img}"</div>
                    <div class = "card-header fw-bold"> ${member.name}</div>
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
            `;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
