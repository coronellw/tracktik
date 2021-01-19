import Layout from '../../Layout';
import Sites from '../Sites/Sites';
import SiteDetails from '../SiteDetails/SiteDetails';
import Home from '../Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={SiteDetails} path="/sites/:id" />
          <Route component={Sites} path="/sites" />
          <Route component={Home} path="/" exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
