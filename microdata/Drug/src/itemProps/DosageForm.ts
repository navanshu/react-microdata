import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'dosageForm',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DosageForm: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'dosageForm',
   ...props
  },
  children
 );
};

DosageForm.Text = TextType;

export { DosageForm };
