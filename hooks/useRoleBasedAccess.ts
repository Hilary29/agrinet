import { useUserRole } from "@/contexts/UserRoleContext"

export function useRoleBasedAccess() {
  const { userRole } = useUserRole()

  const canAccess = (requiredRoles: string[]) => {
    return requiredRoles.includes(userRole)
  }

  return { userRole, canAccess }
}

