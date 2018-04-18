import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryPie } from 'victory';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import './profile-extended-solo.css';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';

const data = [
    { date: '15 MAR', percentage: 25 },
    { date: '16 MAR', percentage: 35 },
    { date: '17 MAR', percentage: 55 },
    { date: '18 MAR', percentage: 45 },
    { date: '19 MAR', percentage: 65 },
    { date: '20 MAR', percentage: 55 },
    { date: '21 MAR', percentage: 45 },
    { date: '22 MAR', percentage: 70 }
];
const styles = {
    refresh: {
        margin: 'auto',
        fontFamily: 'Roboto Light',
        fontSize: '0.7em',
        marginRight: '4px',
        opacity: '0.3'
    },
    FirstRowTitle: {
        fontFamily: 'Roboto Medium',
        fontSize: '1.125em'
    },
    selector: {
        marginTop: '2px',
        marginBottom: 'auto',
        marginLeft: '30px'
    },
    titlepic: {
        maxWidth: '100px',
        maxHeight: '100px'
    },
    statTitle: {
        fontSize: '18px',
        fontFamily: 'Roboto Medium',
        margin: 0
    },
    statNumber_blue: {
        fontSize: '10px',
        fontFamily: 'Roboto Medium',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        color: '#635176',
        marginTop: -5
    },
    statNumber_orange: {
        fontSize: '10px',
        fontFamily: 'Roboto Light',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        color: '#F8A231',
        marginTop: 0
    },
    statNumber_orange_center: {
        fontSize: '10px',
        fontFamily: 'Roboto Light',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        color: '#F8A231',
        marginTop: '0'
    },
    percentage: {
        position: 'absolute',
        fontFamily: 'Roboto Medium',
        fontSize: '2vw'
    },
    bigNumber: {
        fontSize: '3.5vw',
        fontFamily: 'Roboto Medium',
        fontWeight: '400',
        marginTop: 'auto',
        marginBottom: '0'
    }
};
export default class ExtendedProfileSolo extends React.Component {
    state = {
        value: 1
    };
    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div className="main">
                <div className="zero-row" />
                <div className="content">
                    <div className="first-row">
                        <span style={styles.FirstRowTitle}>Statistics</span>
                        <div style={styles.selector}>
                            <SelectField
                                style={
                                    {
                                        //backgroundColor: "#1a1124"
                                    }
                                }
                                underlineStyle={{
                                    borderColor: '#635176',
                                    maxWidth: '93%'
                                }}
                                value={this.state.value}
                                onChange={this.handleChange}
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
                        <div className="refresh">
                            <span style={styles.refresh} />
                            <embed
                                className="refreshIcon"
                                src={require('../images/ic_cached_white_24px.svg')}
                            />
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="rating">
                            <div className="ratingHeader">
                                <span className="ratingHeader-title">
                                    RATING
                                </span>
                                <span className="ratingHeader-rankingNumber">
                                    #35
                                </span>
                                <span className="ratingHeader-ranking">
                                    GLOBAL RANKING
                                </span>
                            </div>
                            <embed
                                style={styles.titlepic}
                                src={require('../images/grand Champ.png')}
                            />
                            <div className="separator" />
                            <div className="solo-rating-division">
                                <p style={styles.statTitle}>Grand Champion</p>
                                <p style={styles.statNumber_orange}>
                                    Division V
                                </p>
                                <p style={{ height: '6px' }} />
                                <p style={styles.statTitle}>1100</p>
                                <p style={styles.statNumber_orange}>
                                    Division Points
                                </p>
                            </div>
                        </div>
                        <div className="analytics">
                            <div className="analyticsHeader">
                                <span className="analyticsTitle">
                                    ANALYTICS
                                </span>
                            </div>
                            <div className="donut">
                                <VictoryPie
                                    animate={{
                                        duration: 2000,
                                        easing: 'bounce'
                                    }}
                                    innerRadius={120}
                                    colorScale={['#F8A231', '##100a1c']}
                                    data={[
                                        { x: 'Win', y: 75 },
                                        { x: '', y: 25 }
                                    ]}
                                />
                                <span style={styles.percentage}>75</span>
                            </div>

                            <div
                                style={{
                                    marginTop: '60px',
                                    marginBottom: 'auto'
                                }}
                            >
                                <p style={styles.statTitle}>Win Rate</p>
                                <p style={styles.statNumber_orange}>
                                    percentage
                                </p>
                            </div>
                            <div className="separator" />
                            <div className="analyticsContainer">
                                <div
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <p style={styles.bigNumber}>3803</p>
                                    <p style={styles.statNumber_blue}>
                                        Games played
                                    </p>
                                </div>
                                <div
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <p style={styles.bigNumber}>2546</p>
                                    <p style={styles.statNumber_blue}>
                                        Games Won
                                    </p>
                                </div>
                                <div
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <p style={styles.bigNumber}>1356</p>
                                    <p style={styles.statNumber_blue}>
                                        Games Lost
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="third-row">
                        <div className="analyticsHeader">
                            <span className="analyticsTitle">
                                WIN PERCENTAGE TREND
                            </span>
                        </div>
                        <VictoryChart width={1200}>
                            <VictoryAxis
                                dependentAxis
                                style={{
                                    axis: {
                                        fill: '#635176',
                                        stroke: '#635176'
                                    },
                                    tickLabels: { fill: '#635176' }
                                }}
                            />
                            <VictoryAxis
                                style={{
                                    axis: {
                                        fill: '#635176',
                                        stroke: '#635176'
                                    },
                                    tickLabels: { fill: '#635176' }
                                }}
                            />
                            <VictoryLine
                                animate={{ duration: 2000, easing: 'linear' }}
                                style={{
                                    data: { stroke: '#f6a031' }
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
