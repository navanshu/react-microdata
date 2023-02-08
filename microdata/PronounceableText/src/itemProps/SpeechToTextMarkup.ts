import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'speechToTextMarkup',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SpeechToTextMarkup: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'speechToTextMarkup',
   ...props
  },
  children
 );
};

SpeechToTextMarkup.Text = TextType;

export { SpeechToTextMarkup };
