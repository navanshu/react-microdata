import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IsInvolvedInBiologicalProcess: Type & {
 PropertyValue: Type;
 URL: Type;
 DefinedTerm: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isInvolvedInBiologicalProcess',
   ...props
  },
  children
 );
};

IsInvolvedInBiologicalProcess.PropertyValue = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isInvolvedInBiologicalProcess',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

IsInvolvedInBiologicalProcess.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isInvolvedInBiologicalProcess',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

IsInvolvedInBiologicalProcess.DefinedTerm = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isInvolvedInBiologicalProcess',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

export { IsInvolvedInBiologicalProcess };
