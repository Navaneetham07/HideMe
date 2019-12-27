import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {NameForm} from '../NameForm';
import Notes from '../Notes';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path="/">
<NameForm></NameForm>
        </Route>
        <Route exact path="/notes">
<Notes></Notes>
        </Route>

      </Switch>
    )
  }
}

export default Routes
export { Routes }
