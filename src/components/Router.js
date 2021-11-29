import REACT from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                    <Route exact path="/host/addStore">
                        <AddStore hostObj={hostObj} />
                    </Route>
                    <Route exact path="/host/store">
                        <HostStore />
                    </Route>

                    <Route exact path="/host/waiting">
                        <Waiting />
                    </Route>

                    <Route exact path="/host/editStore">
                        <EditStore />
                    </Route>

                </>

                :
                <>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/guest/store">
                        <GuestStore />
                    </Route>
                </>
            }
        </Switch>
    </Router>);
}
export default AppRouter;