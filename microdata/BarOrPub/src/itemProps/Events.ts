import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EventType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'events',
   itemScope: true,
   itemType: 'https://schema.org/Event',
   ...props
  },
  children
 );
};

const Events: Type & { Event: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'events',
   ...props
  },
  children
 );
};

Events.Event = EventType;

export { Events };
