import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'evidenceOrigin',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EvidenceOrigin: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'evidenceOrigin',
   ...props
  },
  children
 );
};

EvidenceOrigin.Text = TextType;

export { EvidenceOrigin };
