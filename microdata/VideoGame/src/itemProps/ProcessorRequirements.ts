import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'processorRequirements',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ProcessorRequirements: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'processorRequirements',
   ...props
  },
  children
 );
};

ProcessorRequirements.Text = TextType;

export { ProcessorRequirements };
