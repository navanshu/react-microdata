import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Tool: Type & {
 HowToTool: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'tool',
   ...props
  },
  children
 );
};

Tool.HowToTool = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'tool',
   itemScope: true,
   itemType: 'https://schema.org/HowToTool',
   ...props
  },
  children
 );
};

export { Tool };
