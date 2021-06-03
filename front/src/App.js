import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Register from './pages/Register';
import Posts from './pages/Posts';
import Photos from './pages/Photos';
import Error404 from './pages/Custom404';
import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact component={Index} path='/' />
                    <Route exact component={Register} path='/register' />
                    <Route exact component={Posts} path='/posts' />
                    <Route exact component={Photos} path='/photos' />
                    <Route component={Error404} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
