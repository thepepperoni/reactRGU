import './scroll-button.css'
import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import RaisedButton from 'material-ui/RaisedButton';
//import HardwareArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
//import {fullBlack} from 'material-ui/styles/colors';

export default class ScrollButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            height: props.height,
        };
        this.handleClick = this.handleClick.bind(this);
        console.log(this.state.height);

    }
    handleClick(){
        scroll.scrollTo(this.state.height,{
            duration: 500,
            delay: 100,
            smooth: true})
    }
    render(){
        return (
          <div >
              <RaisedButton  backgroundColor="#F6A031"  label="More Stats" fullWidth={true}  onClick={this.handleClick}/>
          </div>
        );
    }
}
//              <RaisedButton  backgroundColor="#F6A031" className="showMore" icon={<HardwareArrowDown color={fullBlack}/>}onClick={this.handleClick}/>
