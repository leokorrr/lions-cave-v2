import {PublicRoute} from './router/PublicRoute/PublicRoute'
import {ProtectedRoute} from './router/ProtectedRoute/ProtectedRoute'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage'
import AboutPage from './pages/AboutPage/AboutPage'
import PositionsPage from './pages/PositionsPage/PositionsPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import AdminPanelPage from './pages/AdminPanelPage/AdminPanelPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
	return (
    	<div>
			<Router basename={`/`}>
				<Switch>
					<PublicRoute exact path={`/`} component={AboutPage} layout={MainLayout} />
					<PublicRoute path={`/projects`} component={ProjectsPage} layout={MainLayout} />
					<PublicRoute path={`/positions`} component={PositionsPage} layout={MainLayout} />
					<PublicRoute path={`/login`} component={LoginPage} layout={MainLayout} />
					<ProtectedRoute routeView='projects' path={`/admin-panel/projects`} component={AdminPanelPage} layout={MainLayout} />
					<ProtectedRoute routeView='links' path={`/admin-panel/links`} component={AdminPanelPage} layout={MainLayout} />
					<ProtectedRoute routeView='positions' path={`/admin-panel/positions`} component={AdminPanelPage} layout={MainLayout} />
					<PublicRoute component={NotFoundPage} layout={MainLayout} />
				</Switch>
			</Router>
		</div>
  	);
}

export default App