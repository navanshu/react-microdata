import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'targetPopulation',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TargetPopulation: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'targetPopulation',
   ...props
  },
  children
 );
};

TargetPopulation.Text = TextType;

export { TargetPopulation };
