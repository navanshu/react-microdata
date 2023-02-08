import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AcceptedAnswer: Type & {
 Answer: Type;
 ItemList: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedAnswer',
   ...props
  },
  children
 );
};

AcceptedAnswer.Answer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedAnswer',
   itemScope: true,
   itemType: 'https://schema.org/Answer',
   ...props
  },
  children
 );
};

AcceptedAnswer.ItemList = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedAnswer',
   itemScope: true,
   itemType: 'https://schema.org/ItemList',
   ...props
  },
  children
 );
};

export { AcceptedAnswer };
