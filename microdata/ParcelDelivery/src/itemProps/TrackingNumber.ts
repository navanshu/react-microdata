import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'trackingNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TrackingNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'trackingNumber',
   ...props
  },
  children
 );
};

TrackingNumber.Text = TextType;

export { TrackingNumber };
