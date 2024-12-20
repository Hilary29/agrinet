'use client'

import { useState } from 'react'

interface SortByProps {
  options: { id: string; label: string }[]
  defaultOption?: string
  onSortChange?: (selectedOption: string) => void 
}

export function SortBy({ options, defaultOption, onSortChange }: SortByProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || options[0]?.label
  )

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)

    if (onSortChange) {
      onSortChange(option)
    }
  }

  return (
    <div className="relative flex justify-end">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-sm"
      >
        Sort by - {selectedOption}
        <svg
          className={`h-6 w-6 transition-transform duration-300 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <ul className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white-50 shadow-lg">
          {options.map(option => (
            <li key={option.id} >
              <button
                onClick={() => handleOptionSelect(option.label)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                  selectedOption === option.label ? 'font-semibold' : ''
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}