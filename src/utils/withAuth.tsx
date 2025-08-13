import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

// Higher Order function
export const withAuth = (Component: ComponentType, requiredRole?: TRole[]) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    // console.log("coming from with auth", data, requiredRole);
    
    // console.log("role is", requiredRole?.includes(data?.data?.role as TRole));

    /**
     * isLoading -> true -- Ekhono resposne a data ashe ni
     * isLoading -> false -- data resposne a chole ashche
     */

    if (!isLoading && !data?.data?.email) {
      return <Navigate to={"/login"} />;
    }

    if (
      requiredRole &&
      !isLoading &&
      !requiredRole.includes(data?.data?.role as TRole)
    ) {
      return <Navigate to="/unauthorized" />;
    }
    // console.log("Inside with auth", data);

    return <Component />;
  };
};
