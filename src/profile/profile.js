import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';

//import SwipeableViews from 'react-swipeable-views';
import './profile.css';
import ScrollButton from '../scroll-button';
import ExtendedProfile from '../profile-extended/profile-extended';

export default class ProfileTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            data: props.data
        };
    }

    componentDidMount() {
        //console.log(this.state.id);
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
                                <p className="statNumber inline">1456 </p>
                                <p className="inline statTitle">
                                    {' '}
                                    Division rating
                                </p>
                            </h2>
                            <h2 className="subStat">
                                <p className="statNumber inline">35 </p>
                                <p className="inline statTitle">
                                    {' '}
                                    Global Overall Position
                                </p>
                            </h2>
                            <h2 className="subStat">
                                <p className="statNumber inline">1256 </p>
                                <p className="inline statTitle"> Games Won</p>
                                <span className="statTotalGames">
                                    {' '}
                                    (of 1564 played)
                                </span>
                            </h2>
                            <div className="winTotal">
                                <div className="winPercent">
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

                <ExtendedProfile />
            </div>
        );
    }
}
