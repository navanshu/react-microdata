import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'reportNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ReportNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reportNumber',
   ...props
  },
  children
 );
};

ReportNumber.Text = TextType;

export { ReportNumber };
