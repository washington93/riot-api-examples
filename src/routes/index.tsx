import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Champions from '../pages/Champions'

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Champions} />
    </Switch>
  </>
)

export default Routes
