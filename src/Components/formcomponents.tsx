"use client";

import React, { useEffect, useRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: React.ReactNode;
}

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// Input component that suppresses hydration warnings from browser extensions
export const FormInput: React.FC<FormInputProps> = ({ label, className, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Remove any attributes added by browser extensions after mount
    if (inputRef.current) {
      const unwantedAttrs = ['fdprocessedid', 'data-form-type', 'data-ms-editor'];
      unwantedAttrs.forEach(attr => {
        if (inputRef.current?.hasAttribute(attr)) {
          inputRef.current.removeAttribute(attr);
        }
      });
    }
  }, []);

  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        className={className}
        suppressHydrationWarning
        {...props}
      />
    </div>
  );
};

// Select component that suppresses hydration warnings
export const FormSelect: React.FC<FormSelectProps> = ({ label, className, children, ...props }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (selectRef.current) {
      const unwantedAttrs = ['fdprocessedid', 'data-form-type'];
      unwantedAttrs.forEach(attr => {
        if (selectRef.current?.hasAttribute(attr)) {
          selectRef.current.removeAttribute(attr);
        }
      });
    }
  }, []);

  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        ref={selectRef}
        className={className}
        suppressHydrationWarning
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

// Button component that suppresses hydration warnings
export const FormButton: React.FC<FormButtonProps> = ({ className, children, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const unwantedAttrs = ['fdprocessedid'];
      unwantedAttrs.forEach(attr => {
        if (buttonRef.current?.hasAttribute(attr)) {
          buttonRef.current.removeAttribute(attr);
        }
      });
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      className={className}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </button>
  );
};

// FAQ Button component for accordion items
export const FAQButton: React.FC<FormButtonProps> = ({ className, children, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const unwantedAttrs = ['fdprocessedid'];
      unwantedAttrs.forEach(attr => {
        if (buttonRef.current?.hasAttribute(attr)) {
          buttonRef.current.removeAttribute(attr);
        }
      });
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      className={className}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </button>
  );
};