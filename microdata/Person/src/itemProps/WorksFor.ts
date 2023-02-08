import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrganizationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'worksFor',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

const WorksFor: Type & { Organization: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'worksFor',
   ...props
  },
  children
 );
};

WorksFor.Organization = OrganizationType;

export { WorksFor };
