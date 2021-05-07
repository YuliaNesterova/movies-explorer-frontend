import React from "react";

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { Route, Switch, useHistory } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [editProfileMessage, setEditProfileMessage] = React.useState('');
    const [registerErrorMessage, setRegisterErrorMessage] = React.useState('');
    const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
    const [isUpdateSuccess, setIsUpdateSuccess] = React.useState(true);
    const [token, setToken] = React.useState('');
    const [currentUser, setCurrentUser] = React.useState('');

    const history = useHistory();

    function handleLogin(password, email) {
        auth.authorize(password, email)
            .then((data) => {
                if(data.token) {
                    setLoggedIn(true);
                    setLoginErrorMessage('');
                    history.push('/movies');
                } else if(data.message) {
                    setLoginErrorMessage(data.message);
                }
            })
            .catch(() => {
                setLoginErrorMessage('Что-то пошло не так...')
            })
    }

    function handleRegister(name, password, email) {
        auth.register(name, password, email)
            .then((res) => {
                if(res.user) {
                    setRegisterErrorMessage('')
                    handleLogin(password, email);
                } else if(res.message) {
                    setRegisterErrorMessage(res.message);
                }
            })
            .catch(() => {
                setRegisterErrorMessage('Что-то пошло не так...');
            })
    }

    function handleEditUserInfo(name, email) {
        auth.editUserData(token, name, email)
            .then((newUser) => {
                if(newUser._id) {
                    setCurrentUser(newUser);
                    setIsUpdateSuccess(true);
                } else if(newUser.message){
                    setEditProfileMessage(newUser.message);
                    setIsUpdateSuccess(false);
                }
                    return
            })
            .catch(() => {
                setEditProfileMessage('При обновлении профиля произошла ошибка');
                setIsUpdateSuccess(false);
            })
    }

    function handleSignOut() {
        setLoggedIn(false);
        localStorage.removeItem('token');
        history.push('/');
    }

    function clearAllErrorMessages() {
        setRegisterErrorMessage('');
        setLoginErrorMessage('');
        setEditProfileMessage('');
    }

    React.useEffect(() => {
        function checkToken() {

            if(localStorage.getItem('token')) {
                const token = localStorage.getItem('token');

                if(token) {
                    Promise.all([auth.getUserData(token)])
                        .then(([userData]) => {
                            setLoggedIn(true);
                            setToken(localStorage.getItem('token'));
                            history.push('/movies');
                            setCurrentUser(userData);
                        })
                        .catch((err) => {
                                console.log(err);
                            }
                        )
                }
            }
        }
        checkToken();

    }, [history, loggedIn])


  return (

      <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
          <Switch>
              <Route exact path="/">
                  <Main loggedIn={loggedIn}/>
              </Route>

              <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies}/>
              <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies}/>
              <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} onSignOut={handleSignOut}
                              onChangeUser={handleEditUserInfo}
                              message={editProfileMessage} isUpdateSuccess={isUpdateSuccess}/>
              <Route exact path="/signup" >
                  <Register onRegister={handleRegister} errorMessage={registerErrorMessage} onClear={clearAllErrorMessages}/>
              </Route>
              <Route exact path="/signin" >
                  <Login onLogin={handleLogin} errorMessage={loginErrorMessage} onClear={clearAllErrorMessages}/>
              </Route>
              <Route exact path="/notfound" >
                  <NotFound />
              </Route>
          </Switch>
      </div>

      </CurrentUserContext.Provider>
  );
}

export default App;
