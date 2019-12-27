import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

// import { Home } from 'src/Page/Home'
// import { Plp } from 'src/Page/Plp'
// import { NotFound } from 'src/Page/NotFound'

const Home = loadable(() => import('src/Page/Home'))
const Plp = loadable(() => import('src/Page/Plp'))
const NotFound = loadable(() => import('src/Page/NotFound'))

class Routes extends React.Component {
  render() {
    const bagProperties = {
      isToRenderAddToBag: true,
      addToBagText: 'Add items to bag!!',
    }
    return (
      <Switch>
        <Route
          exact
          path="/catalog/:catalogId?"
          render={routeProps => {
            return <Plp {...routeProps} bagValues={bagProperties} />
          }}
        />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    )
  }
}

export default Routes
export { Routes }
