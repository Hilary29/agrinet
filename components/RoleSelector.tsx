import { useUserRole } from "@/contexts/UserRoleContext"

export function RoleSelector() {
  const { userRole, setUserRole } = useUserRole()

  return (
    <select
      value={userRole}
      onChange={(e) => setUserRole(e.target.value as "user" | "farmer" | "organization")}
      className="p-2 border rounded"
    >
      <option value="user">User</option>
      <option value="farmer">Farmer(Single Organisation)</option>
      <option value="organization">Organisation</option>
    </select>
  )
}

