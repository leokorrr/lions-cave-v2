import React, {Component} from 'react'

class MainLayout extends Component {
    render() {
        const Component = this.props.component
        const {location} = this.props
        return (
            <Component routeView={this.props.routeView} location={location}/>
        )
    }
}

export default MainLayout