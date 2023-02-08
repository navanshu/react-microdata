import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'floorLevel',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const FloorLevel: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'floorLevel',
   ...props
  },
  children
 );
};

FloorLevel.Text = TextType;

export { FloorLevel };
