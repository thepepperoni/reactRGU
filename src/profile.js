import React from 'react';
//import {Tabs, Tab} from 'material-ui/Tabs';
//import SwipeableViews from 'react-swipeable-views';
import "./profile.css"
import ScrollButton from './scroll-button';
import ExtendedProfile from "./profile-extended";


export default class ProfileTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            data: props.data
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };
    componentDidMount(){
        console.log(this.state.id);
    }
    render() {
        return (
            <div>

                <ScrollButton height={window.innerHeight} />

                <div className="container red">
                    <div className="item left ">
                        <h1 className="username">{this.state.data.attributes.name}</h1>
                        <h2><p className="textColor inline">14562</p><p className="inline username"> division</p></h2>
                        <h3>Title 3</h3>
                    </div>
                    <div className="item right">
                        <img src={require("./images/rukan.png")}/>
                    </div>
                </div>

                <ExtendedProfile/>
            </div>


        );
    }
}
/*
  <div>
                <h1>{this.state.data.attributes.name}</h1>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Profile" value={0} />
                    <Tab label="Champions" value={1} />
                    <Tab label="Teams" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <h3 className="inline"> Global w/l: <p className="win inline">{this.state.data.attributes.stats[2]}</p><p className="inline">/</p><p className="loss inline">{this.state.data.attributes.stats[3]}</p></h3>
                    </div>
                    <div style={styles.slide}>
                        Champions
                    </div>
                    <div style={styles.slide}>
                        Teams
                    </div>
                </SwipeableViews>
            </div>
 */