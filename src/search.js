import React from 'react'
import {
    withRouter
} from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {white} from 'material-ui/styles/colors'
import './search.css';

const styles = {
    white:{
        color:white
    },
    button:{
        margin: 12,
    }
};
 class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }


    submitHandler(event) {
        event.preventDefault();
        this.props.history.push(`results/${this.state.inputValue}`);
    }

    render() {

        return (
            <div className="containerSearch">
                <div>
                    <h1 className="title">BattleU</h1>
                </div>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label>
                            <TextField inputStyle={styles.white} hintStyle={styles.white} value={this.state.inputValue} hintText="Username to lookup" onChange={evt => this.updateInputValue(evt)} id="user"  />
                        </label>
                        <RaisedButton label="Search" primary={true} style={styles.button} type="submit" />
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
export default withRouter(SearchPage)