import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'disambiguatingDescription',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DisambiguatingDescription: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'disambiguatingDescription',
   ...props
  },
  children
 );
};

DisambiguatingDescription.Text = TextType;

export { DisambiguatingDescription };
