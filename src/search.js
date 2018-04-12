import React from 'react';
import { withRouter } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import './search.css';

const styles = {
    white: {
        color: white,
        zIndex: 5
    },
    button: {
        margin: 12,
        backgroundColor: '#f5a031',
        borderRadius: 4,
        zIndex: 5
    },
    hint: {
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.9em',
        fontStyle: 'italic',
        fontWeight: '300',
        zIndex: 5
    },
    underlay: {
        zIndex: 0,
        width: '70%',
        position: 'absolute',
        margin: 'auto',
        bottom: 20
    },
    war: {
        display: 'block',

        marginLeft: 'auto',
        marginRight: 'auto'
        //borderColor: "red",
        //borderStyle: "solid"
    },
    subhead: {
        margin: 'auto',
        width: '100%',
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Roboto',
        fontSize: '3em',
        top: 20,
        display: 'none'
    },
    mark: {
        //borderColor: "blue",
        //borderStyle: "solid"
    },
    underline: {
        borderColor: '#f5a031'
    },
    underlineFocus: {
        borderColor: '#f5a031'
    }
};
class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.history.push(`results/${this.state.inputValue}`);
        //<h1 className="title">BattleU</h1>
    }

    render() {
        return (
            <div className="containerSearch" style={styles.mark}>
                <div
                    style={{
                        width: 1000,
                        zIndex: 5,
                        top: '30%',
                        position: 'absolute'
                    }}
                >
                    <span style={styles.subhead}>
                        {' '}
                        We provide Battlerite player statistics
                    </span>
                    <embed
                        style={{ width: 200, display: 'block', margin: 'auto' }}
                        src={require('./images/Logo SVG.svg')}
                    />
                </div>
                <div style={styles.underlay}>
                    <img
                        style={styles.war}
                        src={require('./images/transpr.png')}
                    />
                </div>
                <div style={styles.mark}>
                    <form onSubmit={this.submitHandler}>
                        <label>
                            <TextField
                                inputStyle={styles.white}
                                hintStyle={styles.hint}
                                underlineStyle={styles.underline}
                                underlineFocusStyle={styles.underlineFocus}
                                value={this.state.inputValue}
                                hintText="Search a Battlerite Username"
                                onChange={evt => this.updateInputValue(evt)}
                                id="user"
                            />
                        </label>
                        <RaisedButton
                            buttonStyle={{
                                borderRadius: 4,
                                backgroundColor: '#f5a031',
                                width: '120%'
                            }}
                            labelStyle={{ color: '#fff' }}
                            label="Search"
                            style={styles.button}
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
}
export default withRouter(SearchPage);
