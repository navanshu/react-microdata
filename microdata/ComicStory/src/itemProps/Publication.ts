import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PublicationEventType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'publication',
   itemScope: true,
   itemType: 'https://schema.org/PublicationEvent',
   ...props
  },
  children
 );
};

const Publication: Type & { PublicationEvent: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'publication',
   ...props
  },
  children
 );
};

Publication.PublicationEvent = PublicationEventType;

export { Publication };
