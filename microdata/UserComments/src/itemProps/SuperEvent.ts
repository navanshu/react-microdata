import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EventType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'superEvent',
   itemScope: true,
   itemType: 'https://schema.org/Event',
   ...props
  },
  children
 );
};

const SuperEvent: Type & { Event: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'superEvent',
   ...props
  },
  children
 );
};

SuperEvent.Event = EventType;

export { SuperEvent };
