import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CopyrightHolder: Type & {
 Organization: Type;
 Person: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'copyrightHolder',
   ...props
  },
  children
 );
};

CopyrightHolder.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'copyrightHolder',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

CopyrightHolder.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'copyrightHolder',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

export { CopyrightHolder };
