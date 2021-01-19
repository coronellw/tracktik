import Layout from '../../Layout';
import Sites from '../Sites/Sites';
import Home from '../Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route component={Sites} path="/sites" />
        <Route component={() => { }} path="/sites/:id" />
        <Route component={Home} path="/" exact />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
