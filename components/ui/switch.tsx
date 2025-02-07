import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      {label && <label className="mr-2 text-sm font-medium">{label}</label>}
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out ${
          checked ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        aria-checked={checked}
        role="switch"
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};