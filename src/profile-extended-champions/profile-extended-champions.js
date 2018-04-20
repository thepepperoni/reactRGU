import React from 'react';
import { fullWhite } from 'material-ui/styles/colors';
import { SelectField, MenuItem, RaisedButton } from 'material-ui';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
//import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
//import IconButton from 'material-ui/IconButton';
import './profile-extended-champions.css';
import Champion from './champion';
const champions = [
    { id: 1, name: 'Rukan', winrate: 77, xp: 40000, games: 4000 },
    { id: 2, name: 'Pearl', winrate: 80, xp: 40000, games: 150 },
    { id: 3, name: 'Thorn', winrate: 40, xp: 40000, games: 30 },
    { id: 4, name: 'Jade', winrate: 25, xp: 40000, games: 100 },
    { id: 5, name: 'Alysia', winrate: 30, xp: 40000, games: 200 }
];
const styles = {
    FirstRowTitle: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '1.125em'
    },
    selector: {
        marginTop: '2px',
        marginBottom: 'auto',
        marginLeft: '30px'
    },
    selector2: {
        marginTop: '2px',
        marginBottom: 'auto',
        marginLeft: '10px'
    },
    refresh: {
        margin: 'auto',
        fontFamily: 'Roboto',
        fontWeight: 100,
        fontSize: '0.7em',
        marginRight: '4px',
        opacity: '0.3'
    }
};
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
    constructor(props) {
        super(props);
        this.state = {
            season: 1,
            role: 1,
            more: false
        };
        this.handleMoreClick = this.handleMoreClick.bind(this);
    }

    handleSeason = (event, index, value) => this.setState({ season: value });
    handleRole = (event, index, value) => this.setState({ role: value });
    handleMoreClick() {
        this.setState({ more: !this.state.more });
        console.log(this.state.more);
    }

    render() {
        return (
            <div className="container-tab">
                <div className="zero-row" />
                <div className="contentChamps">
                    <div className="column-1">
                        <span style={styles.FirstRowTitle}>Statistics</span>
                        <div style={styles.selector}>
                            <SelectField
                                value={this.state.season}
                                onChange={this.handleSeason}
                                underlineStyle={{
                                    borderColor: '#635176',
                                    maxWidth: '93%'
                                }}
                                floatingLabelStyle={{
                                    color: '#F8A231'
                                }}
                                labelStyle={{
                                    color: 'white',
                                    opacity: '0.5',
                                    fontSize: '0.8em'
                                }}
                            >
                                <MenuItem value={1} primaryText="Season 1" />
                                <MenuItem value={2} primaryText="Season -1" />
                                <MenuItem value={3} primaryText="Season -2" />
                                <MenuItem value={4} primaryText="Season -3" />
                                <MenuItem value={5} primaryText="Season -4" />
                            </SelectField>
                        </div>
                        <div style={styles.selector2}>
                            <SelectField
                                value={this.state.role}
                                onChange={this.handleRole}
                                underlineStyle={{
                                    borderColor: '#635176',
                                    maxWidth: '93%'
                                }}
                                floatingLabelStyle={{
                                    color: '#F8A231'
                                }}
                                labelStyle={{
                                    color: 'white',
                                    opacity: '0.5',
                                    fontSize: '0.8em'
                                }}
                            >
                                <MenuItem value={1} primaryText="Support" />
                                <MenuItem value={2} primaryText="Ranged" />
                                <MenuItem value={3} primaryText="Tank" />
                                <MenuItem value={4} primaryText="Melee" />
                            </SelectField>
                        </div>
                        <div className="refresh">
                            <span style={styles.refresh} />
                            <embed
                                className="refreshIcon"
                                src={require('../images/ic_cached_white_24px.svg')}
                            />
                        </div>
                    </div>
                </div>
                {champions.map(champion => (
                    <Champion
                        key={champion.id}
                        id={champion.id}
                        games={champion.games}
                        winrate={champion.winrate}
                    />
                ))}
            </div>
        );
    }
}
