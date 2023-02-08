import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TicketType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'reservedTicket',
   itemScope: true,
   itemType: 'https://schema.org/Ticket',
   ...props
  },
  children
 );
};

const ReservedTicket: Type & { Ticket: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reservedTicket',
   ...props
  },
  children
 );
};

ReservedTicket.Ticket = TicketType;

export { ReservedTicket };
