import {PublicRoute} from './router/PublicRoute/PublicRoute'
import {ProtectedRoute} from './router/ProtectedRoute/ProtectedRoute'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {Redirect} from 'react-router'
import MainLayout from './layouts/MainLayout/MainLayout'
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage'
import AboutPage from './pages/AboutPage/AboutPage'
import PositionsPage from './pages/PositionsPage/PositionsPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import AdminPanelProjectsPage from './pages/AdminPanelProjectsPage/AdminPanelProjectsPage'
import AdminPanelLinksPage from './pages/AdminPanelLinksPage/AdminPanelLinksPage'
import AdminPanelPositionsPage from './pages/AdminPanelPositionsPage/AdminPanelPositionsPage'

function App() {
	return (
    	<div>
			<Router basename={`/`}>
				<Switch>
					<PublicRoute exact path={`/`} component={AboutPage} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/projects`} component={ProjectsPage} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/positions`} component={PositionsPage} layout={MainLayout}></PublicRoute>
					<PublicRoute path={`/login`} component={LoginPage} layout={MainLayout}></PublicRoute>
					<ProtectedRoute path={`/admin-panel/projects`} component={AdminPanelProjectsPage} layout={MainLayout}></ProtectedRoute>
					<ProtectedRoute path={`/admin-panel/links`} component={AdminPanelLinksPage} layout={MainLayout}></ProtectedRoute>
					<ProtectedRoute path={`/admin-panel/positions`} component={AdminPanelPositionsPage} layout={MainLayout}></ProtectedRoute>
				</Switch>
			</Router>
		</div>
  	);
}

export default App