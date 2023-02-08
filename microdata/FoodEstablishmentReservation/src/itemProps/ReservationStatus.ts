import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReservationStatusTypeType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reservationStatus',
   itemScope: true,
   itemType: 'https://schema.org/ReservationStatusType',
   ...props
  },
  children
 );
};

const ReservationStatus: Type & { ReservationStatusType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reservationStatus',
   ...props
  },
  children
 );
};

ReservationStatus.ReservationStatusType = ReservationStatusTypeType;

export { ReservationStatus };
