import React from 'react'
import {VictoryLine,VictoryChart,VictoryAxis,VictoryPie} from 'victory'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import {fullWhite} from 'material-ui/styles/colors';
import './profile-extended-solo.css'
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh'

const data =[

        { date: "15mar", percentage: 25 },
        { date: "16mar", percentage: 35 },
        { date: "17mar", percentage: 55 },
        { date: "18mar", percentage: 45 },
        { date: "19mar", percentage: 65 }

];



 export default class ExtendedProfileSolo extends React.Component {
     state = {
         value: 1,
     };
     handleChange = (event, index, value) => this.setState({value});

    render(){
        return(

            <div className="main">
                <div className="content" >
                    <div className="first-row">
                        <SelectField
                            value={this.state.value}
                            onChange={this.handleChange}
                            floatingLabelStyle={{color:  "#F8A231"}}
                            labelStyle={{color:'white'}}
                        >
                            <MenuItem value={1} primaryText="Season 1" />
                            <MenuItem value={2} primaryText="Season -1" />
                            <MenuItem value={3} primaryText="Season -2" />
                            <MenuItem value={4} primaryText="Season -3" />
                            <MenuItem value={5} primaryText="Season -4" />
                        </SelectField>

                        <RaisedButton
                            backgroundColor="#1a1124"
                            icon={<NavigationRefresh color={fullWhite} />}
                        />

                    </div>
                    <div className="second-row">
                        <div className="rating">
                            <img src="http://via.placeholder.com/50x50"/>
                            <div className="separator"/>
                            <div className="solo-rating-division">
                                <p>Grand Champion</p>
                                <p>Division V</p>
                                <p>11000</p>
                                <p>Division Points</p>
                            </div>
                        </div>
                        <div className="analytics">
                            <div className="donut">
                                    <VictoryPie
                                        animate={{ duration: 2000, easing: "bounce" }}
                                        innerRadius={100}
                                        colorScale={[ "#F8A231","#1a1124"]}

                                        data={[
                                            { x: "Win", y: 75 },
                                            {x : "", y: 25}
                                        ]}
                                    />
                            </div>
                            <p>Win Rate</p>
                            <p>3803</p>
                            <p>2562</p>
                            <p>1139</p>
                        </div>
                    </div>
                    <div className="third-row">
                        <VictoryChart width={1200}

                        >
                            <VictoryAxis dependentAxis
                                         style={{

                                             axis: {fill: "#635176",stroke:"#635176"},
                                             tickLabels: { fill: "#635176"}
                                         }}
                                         />
                            <VictoryAxis
                                         style={{
                                             axis: {fill: "#635176",stroke:"#635176"},
                                             tickLabels: { fill: "#635176"}
                                         }}
                            />
                            <VictoryLine
                                animate={{ duration: 2000, easing: "linear" }}
                                style={{
                                    data: { stroke: "#f6a031" },

                                }}
                                data={data}
                                x="date"
                                y="percentage"
                            />
                        </VictoryChart>
                    </div>
                </div>
            </div>
        );
}

}