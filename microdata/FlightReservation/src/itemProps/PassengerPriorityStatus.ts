import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PassengerPriorityStatus: Type & {
 QualitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'passengerPriorityStatus',
   ...props
  },
  children
 );
};

PassengerPriorityStatus.QualitativeValue = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'passengerPriorityStatus',
   itemScope: true,
   itemType: 'https://schema.org/QualitativeValue',
   ...props
  },
  children
 );
};

export { PassengerPriorityStatus };
