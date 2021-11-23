import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import CreateCompany from '../pages/CreateCompany';
import Company from '../pages/Company';


export default function Routes() {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Company} />
          <Route path="/create" component={CreateCompany} />
        </Switch>
    
    </BrowserRouter>
  )

}
