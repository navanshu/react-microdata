import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CompetencyRequired: Type & {
 DefinedTerm: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'competencyRequired',
   ...props
  },
  children
 );
};

CompetencyRequired.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'competencyRequired',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

CompetencyRequired.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'competencyRequired',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { CompetencyRequired };
