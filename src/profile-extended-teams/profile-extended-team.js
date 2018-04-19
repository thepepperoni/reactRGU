import React from 'react';
import './profile-extended-team.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const teams = [
    { id: 1, teamName: 'Team1', teamDivison: 'Silver', league: '2v2' },
    { id: 2, teamName: 'Team2', teamDivison: 'Bronze', league: '3v3' },
    { id: 3, teamName: 'Team3', teamDivison: 'Gold', league: '2v2' },
    { id: 4, teamName: 'Team4', teamDivison: 'Platinum', league: '2v2' }
];
const styles = {
    FirstRowTitle: {
        fontFamily: 'Roboto Medium',
        fontSize: '1.125em'
    },
    selector: {
        marginTop: '2px',
        marginBottom: 'auto',
        marginLeft: '30px'
    },
    refresh: {
        margin: 'auto',
        fontFamily: 'Roboto Light',
        fontSize: '0.7em',
        marginRight: '4px',
        opacity: '0.3'
    }
};

function Teams(props) {
    const content = props.teams.map(team => (
        <div key={team.id} className="team-card">
            <p>{team.league}</p>
            <img src="http://via.placeholder.com/50x50" alt="champ icon" />
            <h3>{team.teamName}</h3>
            <p>{team.teamDivison}</p>
        </div>
    ));
    return <div className="teams-container">{content}</div>;
}

export default class ExtendedProfileTeam extends React.Component {
    state = {
        value: 1
    };
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        return (
            <div>
                <div className="content">
                    <div className="zero-row" />
                    <div className="first-row">
                        <span style={styles.FirstRowTitle}>Statistics</span>
                        <div style={styles.selector}>
                            <SelectField
                                style={
                                    {
                                        //backgroundColor: "#1a1124"
                                    }
                                }
                                underlineStyle={{
                                    borderColor: '#635176',
                                    maxWidth: '93%'
                                }}
                                value={this.state.value}
                                onChange={this.handleChange}
                                floatingLabelStyle={{
                                    color: '#F8A231'
                                }}
                                labelStyle={{
                                    color: 'white',
                                    opacity: '0.5',
                                    fontSize: '0.8em'
                                }}
                            >
                                <MenuItem value={1} primaryText="Season 1" />
                                <MenuItem value={2} primaryText="Season -1" />
                                <MenuItem value={3} primaryText="Season -2" />
                                <MenuItem value={4} primaryText="Season -3" />
                                <MenuItem value={5} primaryText="Season -4" />
                            </SelectField>
                        </div>
                        <div className="refresh">
                            <span style={styles.refresh} />
                            <embed
                                className="refreshIcon"
                                src={require('../images/ic_cached_white_24px.svg')}
                            />
                        </div>
                    </div>
                </div>
                <div className="second-row-teams">
                    <Teams teams={teams} />
                </div>
            </div>
        );
    }
}
