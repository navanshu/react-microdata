import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'audienceType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AudienceType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'audienceType',
   ...props
  },
  children
 );
};

AudienceType.Text = TextType;

export { AudienceType };
