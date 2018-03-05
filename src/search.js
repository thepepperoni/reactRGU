import React from 'react'
import Get from './get.js'
import {
    Link
} from 'react-router-dom'
class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }
    makeGet(){
        alert(this.state.inputValue);
        return(<Get id={this.state.inputValue}/>)
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    <input type="text" placeholder="username" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                    <Link to={"/results/" + this.state.inputValue}>
                        <button >search</button>
                    </Link>
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


export default SearchPage