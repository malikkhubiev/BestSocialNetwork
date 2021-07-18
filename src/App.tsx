import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { Login } from './components/Login/Login';
import { NavBar } from './components/NavBar/NavBar';
import ProfileComponent from './components/Profile/ProfileComponent';
import { withSuspense } from './hoc/withSuspense';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersComponent = React.lazy(() => import('./components/Users/UsersComponent'));

let DialogsContainerComp = withSuspense(DialogsContainer);
let UsersComponentComp = withSuspense(UsersComponent);

const App: React.FC<{}> = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="appContainer">
          <HeaderComponent />
          <div className="doublePart">
            <div className="leftSide">
              <NavBar />
            </div>
            <div className="rightSide">
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/profile' />} />
                <Route path='/login' render={() => <Login />} />
                <Route path='/profile/:userId?' render={() => <ProfileComponent />} />
                <Route path='/dialogs/:userId?' render={() => <DialogsContainerComp />} />
                <Route path='/users' render={() => <UsersComponentComp />} />
                <Route path='*' render={() => <p>404 Not found</p>} />
              </Switch>
            </div>
          </div>
        </div>
      </Provider>
    </HashRouter>
  );
}
export default App;