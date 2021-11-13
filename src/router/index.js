import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {

  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState('');
  const api = "/api/game";

  const getCharacters = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setCharacters(data.reverse())
    }catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{
    getCharacters();
  }, [])


	return (
		<Router>
      <Navbar routes={routes} />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={() => <Component page={key} />}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
