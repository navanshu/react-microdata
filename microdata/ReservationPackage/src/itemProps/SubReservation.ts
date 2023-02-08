import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReservationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subReservation',
   itemScope: true,
   itemType: 'https://schema.org/Reservation',
   ...props
  },
  children
 );
};

const SubReservation: Type & { Reservation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'subReservation',
   ...props
  },
  children
 );
};

SubReservation.Reservation = ReservationType;

export { SubReservation };
