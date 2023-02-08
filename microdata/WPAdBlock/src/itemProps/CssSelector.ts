import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CssSelectorTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'cssSelector',
   itemScope: true,
   itemType: 'https://schema.org/CssSelectorType',
   ...props
  },
  children
 );
};

const CssSelector: Type & { CssSelectorType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'cssSelector',
   ...props
  },
  children
 );
};

CssSelector.CssSelectorType = CssSelectorTypeType;

export { CssSelector };
