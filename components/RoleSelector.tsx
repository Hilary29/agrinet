import { useUserRole } from "@/contexts/UserRoleContext"

export function RoleSelector() {
  const { userRole, setUserRole } = useUserRole()

  return (
    <select
      value={userRole}
      onChange={(e) => setUserRole(e.target.value as "user" | "business")}
      className="p-2 border rounded"
    >
      <option value="user">User</option>
      <option value="business">Business</option>
    </select>
  )
}

