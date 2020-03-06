import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from '../components/LandingPage';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/services"
            component={() => <div style={{ height: '150vh' }}>Services</div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => (
              <div style={{ height: '150vh' }}>Custom Software</div>
            )}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div style={{ height: '150vh' }}>Mobile Apps</div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div style={{ height: '150vh' }}>Websites</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div style={{ height: '150vh' }}>Revolution</div>}
          />
          <Route
            exact
            path="/about"
            component={() => <div style={{ height: '150vh' }}>About</div>}
          />
          <Route
            exact
            path="/contact"
            component={() => <div style={{ height: '150vh' }}>Contact</div>}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div style={{ height: '150vh' }}>Estimate</div>}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
