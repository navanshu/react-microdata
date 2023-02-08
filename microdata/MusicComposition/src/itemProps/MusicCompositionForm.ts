import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'musicCompositionForm',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const MusicCompositionForm: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'musicCompositionForm',
   ...props
  },
  children
 );
};

MusicCompositionForm.Text = TextType;

export { MusicCompositionForm };
