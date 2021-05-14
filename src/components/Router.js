import REACT from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AddStore from '../routes/AddStore';
import EditStore from '../routes/EditStore';
import GuestStore from '../routes/GuesetStore';
import HostHome from '../routes/HostHome';
import HostStore from '../routes/HostStore';
import Main from '../routes/Main';
import Waiting from '../routes/Waiting';
const AppRouter = ({ ishost, hostObj }) => {
    return (<Router>
        <Switch>
            {ishost ?
                <>
                    <Route exact path="/">
                        <HostHome hostObj={hostObj} />
                    </Route>
                    <Route exact path="/AddStore">
                        <AddStore hostObj={hostObj} />
                    </Route>
                    <Route exact path="/hostStore">
                        <HostStore />
                    </Route>

                    <Route exact path="/waiting">
                        <Waiting />
                    </Route>

                    <Route exact path="/editStore">
                        <EditStore />
                    </Route>

                </>

                :
                <>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/guestStore">
                        <GuestStore />
                    </Route>
                </>
            }
        </Switch>
    </Router>);
}
export default AppRouter;