import React from 'react';
//import {Tabs, Tab} from 'material-ui/Tabs';
//import SwipeableViews from 'react-swipeable-views';
import "./profile.css"

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
};

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
            <div >
                <div className="container red">
                    <div className="item left">
                        <h1>TEST</h1>
                    </div>
                    <div className="item right">
                        <img src={require("./images/rukan.png")}/>
                    </div>
                </div>

                <div className="container">
                    <h1>test</h1>
                </div>
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