import React from 'react';
import './get.css'
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
        console.log(this.state.id.params.id);
        fetch("https://api.dc01.gamelockerapp.com/shards/global/players?filter[playerNames]="+this.state.id.params.id,{
            method: 'GET',
            headers: {
                "Authorization":" eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MzRiOTU5MC1mZDM4LTAxMzUtNmNhZC0wYTU4NjQ2MGE2NGYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTE5NjU5MjY1LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxldS0zN2RhZGFlZC1hY2FkLTQ3MjctODZiMS02ZTJlOGM5NGFlOWQiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.jf1RKIU35VN05oIp4031YxOYyLHSDlvQ0fefnoCCBNQ",
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
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>{items.attributes.name}</h1>
                    <h3 className="inline"> Global w/l: <p className="win inline">{items.attributes.stats[2]}</p><p className="inline">/</p><p className="loss inline">{items.attributes.stats[3]}</p></h3>

                </div>

            );
        }
        //*/
    }

}
export default Get;