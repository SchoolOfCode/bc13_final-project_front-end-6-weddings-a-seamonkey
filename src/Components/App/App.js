import './App.css';
import TemporaryDrawer from '../../Navigation/menu/index.js';
import { Outlet, useNavigate } from 'react-router';
import FixedBottomNavigation from '../../Navigation/bottombar/index.js';
import logo from '../../Images/logo.png';
import Auth0ProviderWithHistory from '../../auth/auth0-provider-with-history.js';

function App() {
  const navigate = useNavigate();
  return (
    <Auth0ProviderWithHistory>
      <>
        <div className="Menu">
          <div className="intro">
            <h1 className="title" onClick={() => navigate('/')}>
              FoodMap
            </h1>
            <img
              className="logo"
              onClick={() => navigate('/')}
              src={logo}
              alt="logo"
            ></img>
          </div>
          <div>
            <TemporaryDrawer className="button" />
          </div>
        </div>
        <div className="App">
          <Outlet />
        </div>
        <div className="bar">
          <FixedBottomNavigation />
        </div>
      </>
    </Auth0ProviderWithHistory>
  );
}

export default App;
