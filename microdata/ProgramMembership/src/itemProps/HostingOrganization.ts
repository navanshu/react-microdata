import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrganizationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hostingOrganization',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

const HostingOrganization: Type & { Organization: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hostingOrganization',
   ...props
  },
  children
 );
};

HostingOrganization.Organization = OrganizationType;

export { HostingOrganization };
