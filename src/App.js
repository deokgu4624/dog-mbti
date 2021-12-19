import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ScoreManager from './components/ScoreManager';
import Home from './components/pages/Home'
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';
import Page6 from './components/pages/Page6';
import Page7 from './components/pages/Page7';
import Page8 from './components/pages/Page8';
import Page9 from './components/pages/Page9';
import Page10 from './components/pages/Page10';
import Page11 from './components/pages/Page11';
import Page12 from './components/pages/Page12';
import ProgressBar from './components/ProgressBar';

import ENFJ from './components/results/ENFJ';
import ENFP from './components/results/ENFP';
import ENTJ from './components/results/ENTJ';
import ENTP from './components/results/ENTP';
import ESFJ from './components/results/ESFJ';
import ESFP from './components/results/ESFP';
import ESTJ from './components/results/ESTJ';
import ESTP from './components/results/ESTP';
import INFJ from './components/results/INFJ';
import INFP from './components/results/INFP';
import INTJ from './components/results/INTJ';
import INTP from './components/results/INTP';
import ISFJ from './components/results/ISFJ';
import ISFP from './components/results/ISFP';
import ISTJ from './components/results/ISTJ';
import ISTP from './components/results/ISTP';
import Header from './components/Header'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <Header />
      <ProgressBar />
      <ScoreManager />
      <Switch>
        <Route exact path = {process.env.PUBLIC_URL + '/'}>
          <Home />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=1'}>
          <Page1 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=2'}>
          <Page2 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=3'}>
          <Page3 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=4'}>
          <Page4 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=5'}>
          <Page5 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=6'}>
          <Page6 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=7'}>
          <Page7 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=8'}>
          <Page8 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=9'}>
          <Page9 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=10'}>
          <Page10 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=11'}>
          <Page11 />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/page=12'}>
          <Page12 />
        </Route>

        <Route path = {process.env.PUBLIC_URL + '/enfj'}>
          <ENFJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/enfp'}>
          <ENFP />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/entj'}>    
          <ENTJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/entp'}>    
          <ENTP />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/esfj'}>
          <ESFJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/esfp'}>
          <ESFP />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/estj'}>    
          <ESTJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/estp'}>    
          <ESTP />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/infj'}>
          <INFJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/infp'}>
          <INFP />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/intj'}>    
          <INTJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/intp'}>    
          <INTP />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/isfj'}>
          <ISFJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/isfp'}>
          <ISFP />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/istj'}>    
          <ISTJ />
        </Route>
        <Route path = {process.env.PUBLIC_URL + '/istp'}>    
          <ISTP />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
