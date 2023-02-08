import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MemberOf: Type & {
 ProgramMembership: Type;
 Organization: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'memberOf',
   ...props
  },
  children
 );
};

MemberOf.ProgramMembership = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'memberOf',
   itemScope: true,
   itemType: 'https://schema.org/ProgramMembership',
   ...props
  },
  children
 );
};

MemberOf.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'memberOf',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

export { MemberOf };
