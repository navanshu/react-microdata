import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AudienceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceAudience',
   itemScope: true,
   itemType: 'https://schema.org/Audience',
   ...props
  },
  children
 );
};

const ServiceAudience: Type & { Audience: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'serviceAudience',
   ...props
  },
  children
 );
};

ServiceAudience.Audience = AudienceType;

export { ServiceAudience };
