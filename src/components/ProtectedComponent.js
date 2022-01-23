import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import withRoleBasedRedirect from "./WithRoleBasedRedirect";

const  ProtectedComponent = ({ element }) => {

  const Component = withRoleBasedRedirect(element);
  return (
    <Component />)
}

export default ProtectedComponent
