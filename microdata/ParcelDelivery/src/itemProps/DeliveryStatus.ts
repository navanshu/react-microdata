import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DeliveryEventType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'deliveryStatus',
   itemScope: true,
   itemType: 'https://schema.org/DeliveryEvent',
   ...props
  },
  children
 );
};

const DeliveryStatus: Type & { DeliveryEvent: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'deliveryStatus',
   ...props
  },
  children
 );
};

DeliveryStatus.DeliveryEvent = DeliveryEventType;

export { DeliveryStatus };
