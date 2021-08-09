import React from 'react';
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import EditProfile from '../../components/EditProfile/EditProfile';
import ViewProfile from '../../components/ViewProfile/ViewProfile';

export default function Profile() {

  const {path, url} = useRouteMatch();

  return (
    <div>
      <h1>Profile page</h1>
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
        <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile}/>
        <Route path={`${path}/editprofile`} component={EditProfile}/>
      </Switch>
    </div>
  )
}
