import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrganizationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'publisherImprint',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

const PublisherImprint: Type & { Organization: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'publisherImprint',
   ...props
  },
  children
 );
};

PublisherImprint.Organization = OrganizationType;

export { PublisherImprint };
