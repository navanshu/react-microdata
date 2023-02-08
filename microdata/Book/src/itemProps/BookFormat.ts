import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BookFormatTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bookFormat',
   itemScope: true,
   itemType: 'https://schema.org/BookFormatType',
   ...props
  },
  children
 );
};

const BookFormat: Type & { BookFormatType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'bookFormat',
   ...props
  },
  children
 );
};

BookFormat.BookFormatType = BookFormatTypeType;

export { BookFormat };
