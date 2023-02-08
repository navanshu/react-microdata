import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BeneficiaryBank: Type & {
 BankOrCreditUnion: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'beneficiaryBank',
   ...props
  },
  children
 );
};

BeneficiaryBank.BankOrCreditUnion = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'beneficiaryBank',
   itemScope: true,
   itemType: 'https://schema.org/BankOrCreditUnion',
   ...props
  },
  children
 );
};

export { BeneficiaryBank };
