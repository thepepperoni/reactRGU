import React from 'react'
import {fullWhite} from "material-ui/styles/colors";
import {LinearProgress} from "material-ui";
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import IconButton from 'material-ui/IconButton';
import './profile-extended-champions.css'
import {VictoryLine,VictoryChart,VictoryAxis} from 'victory'


const data =[

    { date: "15mar", percentage: 25 },
    { date: "16mar", percentage: 35 },
    { date: "17mar", percentage: 55 },
    { date: "18mar", percentage: 45 },
    { date: "19mar", percentage: 65 }

];

export default class Champion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            id:props.id,
            games:props.games,
            winrate:props.winrate,
        };
        this.handleMoreClick = this.handleMoreClick.bind(this);

    }
    handleMoreClick() {
        this.setState({expanded: !this.state.expanded});
        console.log(this.state.expanded)
    }



    render(){


        return(
            <div className="champion-container">

                <div className="champion">
                    <p style={{margin:10}}>#{this.state.id}</p>
                    <p style={{width:100,textAlign:"center"}}>{this.state.games}</p>
                    <img src="http://via.placeholder.com/50x50" alt="champ icon"/>
                    <LinearProgress mode="determinate" value={this.state.winrate} style={{height:10,margin:5}} />
                    <p>{this.state.winrate}%</p>
                    <IconButton style={{marginLeft:"auto"}} className="push" onClick={this.handleMoreClick}>
                        <NavigationExpandMore color={fullWhite}/>
                    </IconButton>
                </div>
                <div>
                    {this.state.expanded ? <ShowGraphic/> : ''}
                </div>

            </div>
        );
    }
}
function ShowGraphic() {
    return(
        <div className="extra-stats">
        <img src={require("../images/rukan.png")} alt="champion" style={{maxWidth:200}}/>

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
    );
}

