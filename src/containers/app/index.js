import React from 'react'
import routes from 'config/routes.js'
import Container from 'containers/layouts/Container'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  const renderRoutes = () => {
    return routes.map(route => <Route exact key={route.path} path={route.path} component={route.component}/>)
  }

  return (
        <Container>
            <Switch>
              {renderRoutes()}
            </Switch>
        </Container>
  )
}

export default App
