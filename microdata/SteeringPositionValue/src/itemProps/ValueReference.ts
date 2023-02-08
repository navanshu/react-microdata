import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ValueReference: Type & {
 Enumeration: Type;
 DefinedTerm: Type;
 MeasurementTypeEnumeration: Type;
 QualitativeValue: Type;
 StructuredValue: Type;
 PropertyValue: Type;
 QuantitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   ...props
  },
  children
 );
};

ValueReference.Enumeration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   itemScope: true,
   itemType: 'https://schema.org/Enumeration',
   ...props
  },
  children
 );
};

ValueReference.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

ValueReference.MeasurementTypeEnumeration = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   itemScope: true,
   itemType: 'https://schema.org/MeasurementTypeEnumeration',
   ...props
  },
  children
 );
};

ValueReference.QualitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   itemScope: true,
   itemType: 'https://schema.org/QualitativeValue',
   ...props
  },
  children
 );
};

ValueReference.StructuredValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   itemScope: true,
   itemType: 'https://schema.org/StructuredValue',
   ...props
  },
  children
 );
};

ValueReference.PropertyValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

ValueReference.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueReference',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

export { ValueReference };
