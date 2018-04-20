import React from 'react';
import './profile-extended-team.css';
import { userId } from '../profile/profile';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';

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
    },
    teamTitle: {
        fontSize: '18px',
        fontFamily: 'Roboto Medium',
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
        fontFamily: 'Roboto Medium',
        fontSize: '0.7em',
        textTransform: 'uppercase',
        fontWeight: 100,
        color: '#f8a231'
    }
};

function Loader() {
    return (
        <div style={{ textAlign: 'center' }}>
            <CircularProgress size={60} thickness={7} />
        </div>
    );
}

function Teams(props) {
    const content = props.teams.map(team => (
        <div key={team.id} className="team-card">
            <p className="teamHeader">
                {' '}
                {team.attributes.name === '' ? 'TBD' : team.attributes.name}
            </p>
            <Avatar
                src={require('../images/' +
                    (team.attributes.stats.league + 1) +
                    '.png')}
                className="inline"
                style={styles.avatar}
                size={30}
            />
            <h3 style={styles.teamTitle}>{team.teamName}</h3>
            <p style={styles.division}>{team.teamDivison}</p>
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
                        marginTop: '-2px',
                        marginBottom: 'auto',
                        fontFamily: 'Roboto Medium',
                        fontSize: '2vw',
                        fontWeight: '400',
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
