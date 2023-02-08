import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrderStatusType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderItemStatus',
   itemScope: true,
   itemType: 'https://schema.org/OrderStatus',
   ...props
  },
  children
 );
};

const OrderItemStatus: Type & { OrderStatus: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'orderItemStatus',
   ...props
  },
  children
 );
};

OrderItemStatus.OrderStatus = OrderStatusType;

export { OrderItemStatus };
