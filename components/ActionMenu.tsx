"use client"

import type * as React from "react"
import { MoreHorizontal, Pencil, Power, Trash2 } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export interface ActionMenuProps {
  onEdit?: () => void
  onToggleActive?: () => void
  onDelete?: () => void
  isActive?: boolean
  showDelete?: boolean
  customActions?: {
    label: string
    onClick: () => void
    icon?: React.ReactNode
  }[]
}

export function ActionMenu({
  onEdit,
  onToggleActive,
  onDelete,
  isActive = true,
  showDelete = true,
  customActions = [],
}: ActionMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {onEdit && (
          <DropdownMenuItem onClick={onEdit}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
        )}
        {onToggleActive && (
          <DropdownMenuItem onClick={onToggleActive}>
            <Power className="mr-2 h-4 w-4" />
            {isActive ? "Deactivate" : "Activate"}
          </DropdownMenuItem>
        )}
        {customActions.map((action, index) => (
          <DropdownMenuItem key={index} onClick={action.onClick}>
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </DropdownMenuItem>
        ))}
        {showDelete && onDelete && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onDelete} className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

