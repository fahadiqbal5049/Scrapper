import React from 'react';

type Option = {
  value: string;
  label: string;
};

interface ToggleButtonGroupProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  options,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`w-full grid grid-cols-${options.length} min-h-[64px] ${className}`}>
      {options.map((option, index) => {
        const isSelected = value === option.value;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              w-full 
              flex 
              justify-center 
              items-center
              ${isSelected ? 'bg-[#3A4249]' : 'bg-transparent'}
              ${isFirst && isSelected ? 'rounded-tl-lg' : ''}
              ${isLast && isSelected ? 'rounded-tr-lg' : ''}
            `}
          >
            <span className="font-semibold capitalize text-white-2">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ToggleButtonGroup;