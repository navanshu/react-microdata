import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'howPerformed',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HowPerformed: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'howPerformed',
   ...props
  },
  children
 );
};

HowPerformed.Text = TextType;

export { HowPerformed };
