import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'specialCommitments',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SpecialCommitments: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'specialCommitments',
   ...props
  },
  children
 );
};

SpecialCommitments.Text = TextType;

export { SpecialCommitments };
