import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProgrammingLanguage: Type & {
 ComputerLanguage: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programmingLanguage',
   ...props
  },
  children
 );
};

ProgrammingLanguage.ComputerLanguage = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programmingLanguage',
   itemScope: true,
   itemType: 'https://schema.org/ComputerLanguage',
   ...props
  },
  children
 );
};

export { ProgrammingLanguage };
