import React from 'react';
//import {Tabs, Tab} from 'material-ui/Tabs';
//import SwipeableViews from 'react-swipeable-views';
import "./profile.css"
import ScrollButton from '../scroll-button';
import ExtendedProfile from "../profile-extended/profile-extended";


export default class ProfileTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            data: props.data
        };
    }

    componentDidMount(){
        console.log(this.state.id);
    }
    render() {
        return (
            <div>


                <div className="container red">
                    <div className="item left ">
                        <div className="leftContent">
                            <h1 className="username">{this.state.data.attributes.name}</h1>
                            <h2><p className="statNumber inline">14562</p><p className="inline statTitle"> division rating</p></h2>
                            <h2><p className="statNumber inline">35</p><p className="inline statTitle"> Global Overall Position</p></h2>
                            <h2><p className="statNumber inline">1256</p><p className="inline statTitle"> Games Won</p></h2>
                            <ScrollButton height={window.innerHeight} />
                        </div>
                    </div>
                    <div className="item right">
                        <img src={require("../images/rukan.png")} alt="champion"/>
                    </div>
                </div>

                <ExtendedProfile/>
            </div>


        );
    }
}
