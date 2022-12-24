import React from "react";
import {Route, Routes,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/styles.css'
import './assets/scss/mediaqueries.css'
import 'aos/dist/aos.css';
import HomePage from './views/Homepage';
import Header from "./components/Header";
import Store from "./views/Store";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import Cart from "./views/Cart";
import Events from "./views/Events";
import Commission from "./views/Commission";

const App = () => {
  const routes = [{
    path: '/',
    component: <HomePage/>,
  },{
      path: '/store',
      component:<Store/>
  },{
      path: '/cart',
      component:<Cart/>
  },{
      path: '/events',
      component:<Events/>
  },{
      path: '/commission',
      component: <Commission/>
  }];

    document.addEventListener('contextmenu', event => event.preventDefault());

  return (
      <>
        <div className="container-fluid app-nav animate__animated animate__fadeInDown">
            <Header/>
        </div>

        <Routes>
          {
            routes.map((route) =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                />,
            )
          }

        </Routes>
      </>

  );
}

export default App;



