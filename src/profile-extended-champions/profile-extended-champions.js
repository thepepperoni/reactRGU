import React from 'react';
import {fullWhite} from "material-ui/styles/colors";
import {SelectField, MenuItem, RaisedButton} from "material-ui";
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
//import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
//import IconButton from 'material-ui/IconButton';
import './profile-extended-champions.css'
import Champion from "./champion";
const champions = [
    {id:1,name:"Rukan",winrate:77,xp:40000, games:4000},
    {id:2,name:"Pearl",winrate:80,xp:40000, games:150},
    {id:3,name:"Thorn",winrate:40,xp:40000, games:30},
    {id:4,name:"Jade",winrate:25,xp:40000, games:100},
    {id:5,name:"Alysia",winrate:30,xp:40000, games:200}
    ];

/*
function ChampionList(props){

    const list = props.champions.map((champion)=>
        <div key={champion.id} className="champion">
            <p style={{margin:10}}>#{champion.id}</p>
            <p style={{width:100,textAlign:"center"}}>{champion.games}</p>
            <img src="http://via.placeholder.com/50x50" alt="champ icon"/>
            <LinearProgress mode="determinate" value={champion.winrate} style={{height:10,margin:5}} />
            <p>{champion.winrate}%</p>
            <IconButton style={{marginLeft:"auto"}} className="push" onClick={props.onClick}>
                <NavigationExpandMore color={fullWhite}/>
            </IconButton>
        </div>
    );
    return(
        <div className="column-3">
            {list}
        </div>
    )
}

function RenderChamps(props) {
    const list = props.champions.map((champion)=>
        <Champion key={champion.id} id={champion.id} games={champion.games} winrate={champion.winrate}/>

    );

    return ({list});
}
*/
 export default class ExtendedProfileChampions extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            season: 1,
            role:1,
            more:false,
        };
        this.handleMoreClick = this.handleMoreClick.bind(this);
    }

     handleSeason = (event, index, value) => this.setState({season:value});
     handleRole = (event, index, value) => this.setState({role:value});
     handleMoreClick() {
         this.setState({more: !this.state.more});
         console.log(this.state.more)
     }



     render(){
        return(
            <div className="container-tab">
                <div className="column-1">
                    <SelectField
                        value={this.state.season}
                        onChange={this.handleSeason}
                        floatingLabelStyle={{color:  "#F8A231"}}
                        labelStyle={{color:'white'}}
                    >
                        <MenuItem value={1} primaryText="Season 1" />
                        <MenuItem value={2} primaryText="Season -1" />
                        <MenuItem value={3} primaryText="Season -2" />
                        <MenuItem value={4} primaryText="Season -3" />
                        <MenuItem value={5} primaryText="Season -4" />
                    </SelectField>

                    <SelectField
                        value={this.state.role}
                        onChange={this.handleRole}
                        floatingLabelStyle={{color:  "#F8A231"}}
                        labelStyle={{color:'white'}}
                    >
                        <MenuItem value={1} primaryText="Support" />
                        <MenuItem value={2} primaryText="Ranged" />
                        <MenuItem value={3} primaryText="Tank" />
                        <MenuItem value={4} primaryText="Melee" />
                    </SelectField>

                    <RaisedButton
                        backgroundColor="#1a1124"
                        icon={<NavigationRefresh color={fullWhite} />}
                    />

                </div>
                {champions.map((champion)=>
                <Champion key={champion.id} id={champion.id} games={champion.games} winrate={champion.winrate}/>) }
                </div>
        );
    }
}

/*
<div className="column-2">
                    <p>Place</p>
                    <p>Games</p>
                    <p>Champion</p>
                    <p className="push">Win Rate</p>
                </div>
 */