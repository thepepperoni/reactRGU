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

const title = {
    500: 'Alpha Tester',
    502: 'Beta Tester',
    503: 'Founder',
    504: 'Contender',
    31001: 'The Expelled Alchemist',
    31004: 'The Lone Ranger',
    31006: 'The Time Mender',
    31007: 'The Molten Fury',
    31008: 'The Eternal',
    31011: 'The Psychopomp',
    31014: 'The Beast Hunter',
    31015: 'The Spear',
    31025: 'The Twisted Terror',
    60015: '#1 S2 Grand Champion Solo'
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
                                {title[this.state.data.attributes.stats.title]}{' '}
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
                                    {
                                        this.state.soloTeamData.attributes.stats
                                            .wins
                                    }{' '}
                                </p>
                                <p className="inline statTitle"> Games Won</p>
                                <span className="statTotalGames">
                                    (of{' '}
                                    {this.state.soloTeamData.attributes.stats
                                        .wins +
                                        this.state.soloTeamData.attributes.stats
                                            .losses}{' '}
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
                            alt={'champion'}
                        />
                        <img
                            className="bgdrop"
                            src={require('../images/Backdrop.png')}
                            alt={'background'}
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
}
