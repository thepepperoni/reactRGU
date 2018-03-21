import React from 'react';
import './get.css';
import './search.css';
import CircularProgress from 'material-ui/CircularProgress';
import ProfileTabs from "./profile/profile";
class Get extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            items: [],
            isLoaded: false,
            id: props.id,
        };
    }

    componentDidMount(){
        fetch("https://api.dc01.gamelockerapp.com/shards/global/players?filter[playerNames]="+this.state.id.params.id,{
            method: 'GET',
            headers: {
                "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MzRiOTU5MC1mZDM4LTAxMzUtNmNhZC0wYTU4NjQ2MGE2NGYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTE5NjU5MjY1LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxldS0zN2RhZGFlZC1hY2FkLTQ3MjctODZiMS02ZTJlOGM5NGFlOWQiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.jf1RKIU35VN05oIp4031YxOYyLHSDlvQ0fefnoCCBNQ",
                "Accept": "application/json",
            }
        }
    ).then(res => res.json())
            .then(

                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data["0"],
                    });
                    console.log(this.state.items);                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        //*

        const { error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="container"><CircularProgress size={60} thickness={7} /></div>;
        } else {
            return (
                <div>
                   <ProfileTabs data={items}/>
                </div>

            );
        }
        //*/
    }

}
export default Get;