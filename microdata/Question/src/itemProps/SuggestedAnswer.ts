import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SuggestedAnswer: Type & {
 ItemList: Type;
 Answer: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'suggestedAnswer',
   ...props
  },
  children
 );
};

SuggestedAnswer.ItemList = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'suggestedAnswer',
   itemScope: true,
   itemType: 'https://schema.org/ItemList',
   ...props
  },
  children
 );
};

SuggestedAnswer.Answer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'suggestedAnswer',
   itemScope: true,
   itemType: 'https://schema.org/Answer',
   ...props
  },
  children
 );
};

export { SuggestedAnswer };
