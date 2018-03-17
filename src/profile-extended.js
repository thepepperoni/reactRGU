import React from 'react'
import './profile-extended.css'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Avatar from 'material-ui/Avatar';
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
    test:{
        width: 200,
    },
    tabcolor:{
        backgroundColor:"#1a1124",
    },
    inkBar:{
        backgroundColor:"#f6a031"
    },
    avatar:{
        margin:5,
    }

};

export default class ExtendedProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };
    render(){
        return(
            <div className="tabcontainer">
                <div className="usernameBar">
                    <Avatar
                        className="inline"
                        style={styles.avatar}
                        icon={<ActionAndroid />}
                        size={30}/>
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
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </div>
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        )
    }
}