'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export interface FilterOption {
  id: string
  label: string
}

export interface FilterSection {
  id: string
  title: string
  options: FilterOption[]
}

interface FiltersProps {
  sections: FilterSection[]
  priceRange?: [number, number]
  onFiltersChange?: (selectedFilters: Record<string, string[]>, priceRange: [number, number]) => void
}

export const Filters = ({
  sections,
  priceRange = [1000, 10000],
  onFiltersChange,
}: FiltersProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [currentPriceRange, setCurrentPriceRange] = useState(priceRange)

  const toggleSection = (sectionId: string) => {
    setExpandedSections(current =>
      current.includes(sectionId)
        ? current.filter(id => id !== sectionId)
        : [...current, sectionId]
    )
  }

  const handleCheckboxChange = (sectionId: string, optionId: string) => {
    setSelectedFilters(current => {
      const sectionFilters = current[sectionId] || []
      const updatedFilters = sectionFilters.includes(optionId)
        ? sectionFilters.filter(id => id !== optionId)
        : [...sectionFilters, optionId]

      const newFilters = { ...current, [sectionId]: updatedFilters }
      if (onFiltersChange) {
        onFiltersChange(newFilters, currentPriceRange)
      }
      return newFilters
    })
  }

  const handlePriceRangeChange = (range: [number, number]) => {
    setCurrentPriceRange(range)
    if (onFiltersChange) {
      onFiltersChange(selectedFilters, range)
    }
  }

  return (
    <aside className="w-full max-w-[306px] space-y-2 px-4">
      <h2 className="font-satoshi text-xl font-medium text-black">Filter By</h2>
      <div className="space-y-0">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border-b border-[#C3C3C3] py-4"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between"
            >
              <span className="text-base font-medium text-black">{section.title}</span>
              {expandedSections.includes(section.id) ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
            {expandedSections.includes(section.id) && (
              <div className="mt-4 space-y-3">
                {section.options.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Checkbox
                      id={option.id}
                      checked={selectedFilters[section.id]?.includes(option.id) || false}
                      onCheckedChange={() => handleCheckboxChange(section.id, option.id)}
                      className="h-5 w-5 rounded border-[#1E1E1E]"
                    />
                    <span className="text-sm text-[#1E1E1E]">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Price Range Section */}
        <div className="border-b border-[#C3C3C3] py-4">
          <button
            onClick={() => toggleSection('price-range')}
            className="flex w-full items-center justify-between"
          >
            <span className="text-base font-medium text-black">Price Range</span>
            {expandedSections.includes('price-range') ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </button>
          {expandedSections.includes('price-range') && (
            <div className="mt-4 space-y-6">
              <div className="flex justify-between">
  
                <span className="text-sm text-[#121212]">
                  {currentPriceRange[0]} FCFA - {currentPriceRange[1]} FCFA
                </span>
              </div>
              <Slider
                defaultValue={priceRange}
                max={10000}
                min={1000}
                step={100}
                value={currentPriceRange}
                onValueChange={handlePriceRangeChange}
                className="[&_[role=slider]]:bg-primary-500 "
              />
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
