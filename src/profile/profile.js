import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import './profile.css';
import ScrollButton from '../scroll-button';
import ExtendedProfile from '../profile-extended/profile-extended';

const teamLeagueText = {
    0: 'Placement',
    1: 'Bronze',
    2: 'Silver',
    3: 'Gold',
    4: 'Platinum',
    5: 'Diamond',
    6: 'Champion League',
    7: 'Grand Champion'
};
let winrate = '';
export default class ProfileTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            data: props.data,
            soloTeamData: props.solo
        };
    }

    componentDidMount() {
        console.log(this.state.soloTeamData);
    }
    //function(event: object, child: object) => void
    handleMenuItemClick = event => {
        console.log(event.target.textContent);
        //*
        switch (event.target.textContent) {
            case 'Refresh':
                window.location.reload();
                break;

            default:
                //console.log();
                break;
        }
        // */
    };

    render() {
        return (
            <div>
                <div className="container red">
                    <embed
                        className="menuLogoMain"
                        style={{
                            width: 40,
                            display: 'inline'
                        }}
                        src={require('../images/BdotU.svg')}
                    />
                    <div
                        style={{
                            right: '5%',
                            top: '5px',
                            zIndex: 2,
                            position: 'absolute'
                        }}
                    >
                        <IconMenu
                            animated={false}
                            iconButtonElement={
                                <IconButton>
                                    <MoreHorizIcon color={'#585462'} />
                                </IconButton>
                            }
                            anchorOrigin={{
                                horizontal: 'left',
                                vertical: 'top'
                            }}
                            targetOrigin={{
                                horizontal: 'left',
                                vertical: 'top'
                            }}
                        >
                            <MenuItem
                                onClick={this.handleMenuItemClick}
                                value={1}
                                primaryText="Refresh"
                            />
                            <MenuItem
                                onClick={this.handleMenuItemClick}
                                value={2}
                                primaryText="Send feedback"
                            />
                            <MenuItem
                                onClick={this.handleMenuItemClick}
                                value={3}
                                primaryText="Settings"
                            />
                        </IconMenu>{' '}
                    </div>
                    <div className="item left ">
                        <div className="leftContent">
                            <h1 className="username">
                                {this.state.data.attributes.name}
                            </h1>
                            <h2 className="subTitle">
                                EA S5 GRAND CHAMPION SOLO{' '}
                            </h2>
                            <h2 className="subStat">
                                <p className="statNumber inline">
                                    {' '}
                                    {
                                        teamLeagueText[
                                            this.state.soloTeamData.attributes
                                                .stats.league + 1
                                        ]
                                    }
                                </p>
                                <p className="inline statTitle"> League</p>
                            </h2>
                            <h2 className="subStat">
                                <p className="statNumber inline">
                                    {this.winrate()}%
                                </p>
                                <p className="inline statTitle">
                                    {' '}
                                    ranked win rate
                                </p>
                            </h2>
                            <h2 className="subStat">
                                <p className="statNumber inline">
                                    {this.state.data.attributes.stats['2']}{' '}
                                </p>
                                <p className="inline statTitle"> Games Won</p>
                                <span className="statTotalGames">
                                    {' '}
                                    (of{' '}
                                    {this.state.data.attributes.stats['3'] +
                                        this.state.data.attributes.stats[
                                            '2'
                                        ]}{' '}
                                    played)
                                </span>
                            </h2>
                            <div className="winTotal">
                                <div
                                    className="winPercent"
                                    style={{ width: winrate + '%' }}
                                >
                                    {' '}
                                    <span className="progress" />{' '}
                                </div>
                            </div>
                            <ScrollButton height={window.innerHeight} />
                        </div>
                    </div>
                    <div className="item right">
                        <img
                            className="champion"
                            src={require('../images/rukan.png')}
                            alt="champion"
                        />
                        <img
                            className="bgdrop"
                            src={require('../images/Backdrop.png')}
                        />
                    </div>
                    <div className="bottomLine" />
                </div>

                <ExtendedProfile userId={this.state.data.id} />
            </div>
        );
    }
    winrate = () => {
        winrate = Math.round(
            this.state.soloTeamData.attributes.stats.wins /
                (this.state.soloTeamData.attributes.stats.wins +
                    this.state.soloTeamData.attributes.stats.losses) *
                100
        );
        return winrate.toString();
    };
    getUserStats = () => {
        /*fetch(
            'https://api.dc01.gamelockerapp.com/shards/global/teams?tag[season]=7&tag[playerIds]=' +
            this.state.data.id,
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
                        items: result.data,
                        all: result.data
                    });
                    let t2 = [];
                    let t3 = [];
                    result.data.filter(t => {
                        switch (t.attributes.stats.members.length) {
                            case 2:
                                t2.push(t);
                                break;
                            case 3:
                                t3.push(t);
                                break;
                            default:
                                break;
                        }
                        return 0;
                    });
                    //*
                    ref.setState({
                        team2V2: t2,
                        team3V3: t3
                    });
                    console.log(t2);
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
    };
}
