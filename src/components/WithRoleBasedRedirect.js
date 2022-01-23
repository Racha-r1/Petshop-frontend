import { useState, useEffect } from "react";
import {useAuth0} from '@auth0/auth0-react';
import {getUserRoles} from '../api/management_api';

const withRoleBasedRedirect = (Component) =>{

  return () => {
    const { user, isLoading } = useAuth0();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [ fetching, setIsFetching ] = useState(true);
    useEffect(() => {
      if (user &&  !isLoading) {
        getUserRoles(user.sub).then(roles => {
            if (roles[0].name === "Admin"){
                  setIsAuthorized(true);
                  setIsFetching(false);
            }
          }
        );
      }
      else if (!isLoading){
        setIsFetching(false);
      }
    }, [user, isLoading]);
    return isAuthorized ? <Component /> : fetching  ? <> </> : <div className="lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12"> <h1 className="px-10 text-xl"> You are not authorized to visit this route!</h1></div>;
    } 
};

export default withRoleBasedRedirect;