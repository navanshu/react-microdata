import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AssociatedDisease: Type & {
 URL: Type;
 PropertyValue: Type;
 MedicalCondition: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedDisease',
   ...props
  },
  children
 );
};

AssociatedDisease.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedDisease',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

AssociatedDisease.PropertyValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedDisease',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

AssociatedDisease.MedicalCondition = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedDisease',
   itemScope: true,
   itemType: 'https://schema.org/MedicalCondition',
   ...props
  },
  children
 );
};

export { AssociatedDisease };
