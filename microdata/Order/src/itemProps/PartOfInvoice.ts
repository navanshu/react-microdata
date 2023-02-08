import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const InvoiceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfInvoice',
   itemScope: true,
   itemType: 'https://schema.org/Invoice',
   ...props
  },
  children
 );
};

const PartOfInvoice: Type & { Invoice: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfInvoice',
   ...props
  },
  children
 );
};

PartOfInvoice.Invoice = InvoiceType;

export { PartOfInvoice };
