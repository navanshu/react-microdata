import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ServiceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'issuedThrough',
   itemScope: true,
   itemType: 'https://schema.org/Service',
   ...props
  },
  children
 );
};

const IssuedThrough: Type & { Service: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'issuedThrough',
   ...props
  },
  children
 );
};

IssuedThrough.Service = ServiceType;

export { IssuedThrough };
