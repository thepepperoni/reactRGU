import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import SearchPage from "./search";
import Get from "./get"

const nf = () =>(
    <div>
        <h1>not found</h1>
    </div>
);
const MainRouter = () => (

    <Router>

            <Switch>
                <Route path="/" exact component={SearchPage} />
                <Route path="/results/:id" component={searchConst} />
                <Route component={nf} />
            </Switch>
    </Router>
);

const searchConst = ({ match }) => (
   <Get id={match}/>
);
export default MainRouter