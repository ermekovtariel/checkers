import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useRoutes } from './router';
import './App.css';

function App() {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [user]);

  const routes = useRoutes({ setUser, user });

  return (
    <div className='App'>
      <BrowserRouter>{routes}</BrowserRouter>
    </div>
  );
}

export default App;
