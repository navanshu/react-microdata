import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'codeSampleType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CodeSampleType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'codeSampleType',
   ...props
  },
  children
 );
};

CodeSampleType.Text = TextType;

export { CodeSampleType };
