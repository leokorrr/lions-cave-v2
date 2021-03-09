import React, {Component} from 'react'
import Menu from '../../components/Menu/Menu'
import Sidebar from '../../components/Sidebar/Sidebar'

class MainLayout extends Component {
    render() {
        const Component = this.props.component
        const {location} = this.props
        return (
            <div className="layout">
                {!this.props.routeView && (<Menu />)}
                <div className="layout__content">
                    {!this.props.routeView && (<Sidebar />)}
                    <Component routeView={this.props.routeView} location={location}/>
                </div>
            </div>
        )
    }
}

export default MainLayout