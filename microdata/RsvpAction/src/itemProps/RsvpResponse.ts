import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RsvpResponseTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'rsvpResponse',
   itemScope: true,
   itemType: 'https://schema.org/RsvpResponseType',
   ...props
  },
  children
 );
};

const RsvpResponse: Type & { RsvpResponseType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'rsvpResponse',
   ...props
  },
  children
 );
};

RsvpResponse.RsvpResponseType = RsvpResponseTypeType;

export { RsvpResponse };
