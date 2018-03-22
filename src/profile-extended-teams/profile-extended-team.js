import React from 'react'
import './profile-extended-team.css'

const teams = [
    {id : 1, teamName: "Team1", teamDivison: "Silver", league:"2v2"},
    {id : 2, teamName: "Team2", teamDivison: "Bronze",league:"3v3"},
    {id : 3, teamName: "Team3", teamDivison: "Gold",league:"2v2"},
    {id : 4, teamName: "Team4", teamDivison: "Platinum",league:"2v2"}

    ];

function Teams(props) {

    const content = props.teams.map((team) =>
        <div key={team.id} className="team-card">
            <p>{team.league}</p>
            <img src="http://via.placeholder.com/50x50" alt="champ icon"/>
            <h3>{team.teamName}</h3>
            <p>{team.teamDivison}</p>
        </div>
    );
    return (
        <div className="teams-container">
            {content}
        </div>
    );
}

export default class ExtendedProfileTeam extends React.Component {


    render(){
        return(<Teams teams={teams}/>);
    }

}
