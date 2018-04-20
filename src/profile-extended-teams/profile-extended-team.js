import React from 'react';
import './profile-extended-team.css';
import { userId } from '../profile/profile';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    FirstRowTitle: {
        fontFamily: 'Roboto',
        fontSize: '1.125em'
    },
    selector: {
        marginTop: '2px',
        marginBottom: 'auto',
        marginLeft: '30px'
    },
    refresh: {
        margin: 'auto',
        fontFamily: 'Roboto',
        fontSize: '0.7em',
        marginRight: '4px',
        opacity: '0.3'
    },
    teamTitle: {
        fontSize: '18px',
        fontFamily: 'Roboto',
        fontWeight: 200,
        marginTop: '5px',
        marginBottom: 0
    },
    avatar: {
        margin: 5,
        width: 70,
        height: 70,
        opacity: 0.8
    },
    division: {
        marginTop: '0',
        marginBottom: '5px',
        fontFamily: 'Roboto',
        fontSize: '0.7em',
        textTransform: 'uppercase',
        fontWeight: 100,
        color: '#f8a231'
    }
};

function TeamType(props) {
    switch (props.size) {
        case 1:
            return 'SOLO';

        case 2:
            return '2V2';
        case 3:
            return '3V3';
    }
}

function TeamDivision(props) {
    switch (props.division) {
        case 0:
            return 'Placement';
        case 1:
            return 'Bronze';

        case 2:
            return 'Silver';
        case 3:
            return 'Gold';
        case 4:
            return 'Platinum';
        case 5:
            return 'Diamond';
        case 6:
            return 'Champion League';
        case 7:
            return 'Grand Champion';
    }
}

function Loader() {
    return (
        <div style={{ textAlign: 'center' }}>
            <CircularProgress size={60} thickness={7} color={'#f8a231'} />
        </div>
    );
}

function Teams(props) {
    const content = props.teams.map(team => (
        <div key={team.id} className="team-card">
            <p className="teamHeader">
                <TeamType size={team.attributes.stats.members.length} />
            </p>
            <Avatar
                src={require('../images/placement.png')}
                className="inline"
                style={styles.avatar}
                size={30}
            />
            <h3 style={styles.teamTitle}>
                {team.attributes.name === '' ? 'TBD' : team.attributes.name}
            </h3>
            <p style={styles.division}>
                <TeamDivision division={team.attributes.stats.league + 1} />
            </p>
            <div
                style={{
                    marginTop: '15px',
                    flexDirection: 'row',
                    display: 'flex'
                }}
            >
                <Avatar
                    src={require('../images/' +
                        (team.attributes.stats.league + 1) +
                        '.png')}
                    backgroundColor={'none'}
                    style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        display: 'flex',
                        width: 30,
                        height: 30
                    }}
                    size={25}
                />
                <p
                    style={{
                        display: 'flex',
                        marginTop: '2px',
                        marginBottom: 'auto',
                        fontFamily: 'Roboto',
                        fontSize: '1.6em',
                        fontWeight: '500',
                        letterSpacing: '1px',
                        marginLeft: '4px'
                    }}
                >
                    {' '}
                    {Math.floor(Math.random() * (4351 - 34) + 34)}{' '}
                </p>
            </div>
        </div>
    ));
    return <div className="teams-container">{content}</div>;
}

export default class ExtendedProfileTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 7,
            userId: props.userId,
            items: []
        };
    }

    componentDidMount() {
        getTeam(this);
    }
    //*

    handleChange = (event, index, value) => {
        this.setState({ value: value, isLoaded: false }, () => {
            //console.log("state value" + this.state.value);
            getTeam(this);
        });
    };

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
                                <MenuItem value={7} primaryText="Season 1" />
                                <MenuItem value={6} primaryText="Pre-Season" />
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

                <div>
                    {this.state.isLoaded ? (
                        <Teams classname="teamArea" teams={this.state.items} />
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        );
    }
}
function getTeam(ref) {
    fetch(
        'https://api.dc01.gamelockerapp.com/shards/global/teams?tag[season]=' +
            ref.state.value +
            '&tag[playerIds]=' +
            ref.state.userId,
        {
            method: 'GET',
            headers: {
                Authorization:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MzRiOTU5MC1mZDM4LTAxMzUtNmNhZC0wYTU4NjQ2MGE2NGYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTE5NjU5MjY1LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxldS0zN2RhZGFlZC1hY2FkLTQ3MjctODZiMS02ZTJlOGM5NGFlOWQiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.jf1RKIU35VN05oIp4031YxOYyLHSDlvQ0fefnoCCBNQ',
                Accept: 'application/json'
            }
        }
    )
        .then(res => res.json())
        .then(
            result => {
                ref.setState({
                    isLoaded: true,
                    items: result.data
                });
                console.log(ref.state.items);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            error => {
                ref.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    //*/
}
