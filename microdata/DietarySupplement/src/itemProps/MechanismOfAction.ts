import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'mechanismOfAction',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const MechanismOfAction: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'mechanismOfAction',
   ...props
  },
  children
 );
};

MechanismOfAction.Text = TextType;

export { MechanismOfAction };
