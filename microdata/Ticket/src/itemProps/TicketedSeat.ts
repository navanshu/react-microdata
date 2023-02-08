import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SeatType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ticketedSeat',
   itemScope: true,
   itemType: 'https://schema.org/Seat',
   ...props
  },
  children
 );
};

const TicketedSeat: Type & { Seat: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'ticketedSeat',
   ...props
  },
  children
 );
};

TicketedSeat.Seat = SeatType;

export { TicketedSeat };
