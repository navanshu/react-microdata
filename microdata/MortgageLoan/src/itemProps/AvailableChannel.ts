import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ServiceChannelType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableChannel',
   itemScope: true,
   itemType: 'https://schema.org/ServiceChannel',
   ...props
  },
  children
 );
};

const AvailableChannel: Type & { ServiceChannel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availableChannel',
   ...props
  },
  children
 );
};

AvailableChannel.ServiceChannel = ServiceChannelType;

export { AvailableChannel };
