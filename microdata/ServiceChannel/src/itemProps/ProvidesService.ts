import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ServiceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'providesService',
   itemScope: true,
   itemType: 'https://schema.org/Service',
   ...props
  },
  children
 );
};

const ProvidesService: Type & { Service: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'providesService',
   ...props
  },
  children
 );
};

ProvidesService.Service = ServiceType;

export { ProvidesService };
