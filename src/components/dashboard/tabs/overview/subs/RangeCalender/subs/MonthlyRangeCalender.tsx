"use client";

import React, { useEffect, useRef } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

interface MonthlyRangeCalenderProps {
  isOpen: boolean;
  value: DateObject[];
  onChange: (dates: DateObject[]) => void;
}

// Ref type for DatePicker
type DatePickerRef = {
  openCalendar: () => void;
  closeCalendar: () => void;
};

const MonthlyRangeCalender: React.FC<MonthlyRangeCalenderProps> = ({
  isOpen,
  value,
  onChange,
}) => {
  const datePickerRef = useRef<DatePickerRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && datePickerRef.current) {
      datePickerRef.current.openCalendar();
    }
  }, [isOpen]);

  const preventOutsideClickClosure = (event: MouseEvent) => {
    const datePickerElement = document.querySelector(".rmdp-container");
    const isClickInDatePicker = datePickerElement?.contains(
      event.target as Node
    );
    const isClickInContainer = containerRef.current?.contains(
      event.target as Node
    );

    if (!isClickInDatePicker && !isClickInContainer) {
      event.stopPropagation(); // Prevent calendar from closing
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", preventOutsideClickClosure);
    }

    return () => {
      document.removeEventListener("mousedown", preventOutsideClickClosure);
    };
  }, [isOpen]);

  const formattedValues = value?.map((date) => date.format("MMM DD, YYYY"));

  return (
    <div
      className="flex select-none montly-range py-3 relative flex-col"
      ref={containerRef}
    >
      <div className="w-full grid pt-1 px-10 grid-cols-2 gap-5">
        <input
          value={formattedValues[0]}
          readOnly
          className="w-full text-center text-sm font-normal text-white-2 bg-transparent border-[1px] border-white-2 rounded-sm focus:outline-none"
        />
        <input
          value={formattedValues[1]}
          readOnly
          className="w-full text-center text-sm font-normal text-white-2 bg-transparent border-[1px] border-white-2 rounded-sm focus:outline-none"
        />
      </div>
      <DatePicker
        
        onlyMonthPicker
        value={value}
        onChange={onChange}
        range
        ref={datePickerRef}
        portal={false}
        onOpen={() => {
          if (datePickerRef.current) datePickerRef.current.openCalendar();
        }}
        onClose={() => {}} // Override the default onClose behavior
        hideOnScroll={false}
      />
    </div>
  );
};

export default MonthlyRangeCalender;
