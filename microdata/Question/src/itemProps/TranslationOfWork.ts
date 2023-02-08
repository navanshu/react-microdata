import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CreativeWorkType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'translationOfWork',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

const TranslationOfWork: Type & { CreativeWork: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'translationOfWork',
   ...props
  },
  children
 );
};

TranslationOfWork.CreativeWork = CreativeWorkType;

export { TranslationOfWork };
