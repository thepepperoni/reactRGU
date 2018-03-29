import React from 'react';
import './profile-extended.css';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Avatar from 'material-ui/Avatar';
import ExtendedProfileSolo from '../profile-extended-solo/profile-extended-solo';
import ExtendedProfileTeam from '../profile-extended-teams/profile-extended-team';
import ExtendedProfileChampions from '../profile-extended-champions/profile-extended-champions';
import FlatButton from 'material-ui/FlatButton';
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    },
    slide: {
        padding: 10
    },
    test: {
        width: 200
    },
    tabcolor: {
        backgroundColor: '#1a1124'
    },
    inkBar: {
        backgroundColor: '#f6a031'
    },
    avatar: {
        margin: 5
    }
};

export default class ExtendedProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
    }
    handleChange = value => {
        this.setState({
            slideIndex: value
        });
    };
    render() {
        return (
            <div className="tabcontainer">
                <div className="navBar">
                    <h3>BU</h3>
                    <h3>LeaderBoards</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <FlatButton
                        label="Search"
                        containerElement="label"
                        className="push"
                        style={{ verticalAlign: 'middle', marginLeft: 'auto' }}
                    />
                </div>
                <div className="usernameBar">
                    <Avatar
                        className="inline"
                        style={styles.avatar}
                        icon={<ActionAndroid />}
                        size={30}
                    />
                    <h1 className="usernameExtended inline">Username</h1>
                </div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                    inkBarStyle={styles.inkBar}
                    tabItemContainerStyle={styles.tabcolor}
                >
                    <Tab label="Solo" value={0} />
                    <Tab label="Teams" value={1} />
                    <Tab label="Champions" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <ExtendedProfileSolo />
                        <br />
                    </div>
                    <div>
                        <ExtendedProfileTeam />
                    </div>
                    <div>
                        <ExtendedProfileChampions />
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
