import {PublicRoute} from './router/PublicRoute/PublicRoute'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {Redirect} from 'react-router'
import MainLayout from './layouts/MainLayout/MainLayout'
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPanelProjectsPage from './pages/AdminPanelProjectsPage/AdminPanelProjectsPage';

function App() {
	return (
    	<div>
			<Router basename={`/`}>
				<Switch>
					<PublicRoute exact path={`/`} component={() => (<Redirect to={`/login`}/>)} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/login`} component={LoginPage} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/admin-panel/projects`} component={AdminPanelProjectsPage} layout={MainLayout}></PublicRoute>
				</Switch>
			</Router>
		</div>
  	);
}

export default App;
