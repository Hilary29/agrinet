import React from "react";
import { control_auth_component_roles } from "../services/auth/auth_component_rules";

interface ProtectedComponentProps {
  name: string;
  type: "component" | "sideBar";
  children: React.ReactNode;
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({ name, type, children }) => {
  const isAuthorized = control_auth_component_roles(name, type);

  if (!isAuthorized) {
    return null; // Cache le composant si l'utilisateur n'a pas les permissions
  }

  return <>{children}</>;
};

export default ProtectedComponent;
