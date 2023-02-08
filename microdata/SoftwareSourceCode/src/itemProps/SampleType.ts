import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'sampleType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SampleType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'sampleType',
   ...props
  },
  children
 );
};

SampleType.Text = TextType;

export { SampleType };
