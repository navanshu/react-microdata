import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AccommodationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isPlanForApartment',
   itemScope: true,
   itemType: 'https://schema.org/Accommodation',
   ...props
  },
  children
 );
};

const IsPlanForApartment: Type & { Accommodation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isPlanForApartment',
   ...props
  },
  children
 );
};

IsPlanForApartment.Accommodation = AccommodationType;

export { IsPlanForApartment };
