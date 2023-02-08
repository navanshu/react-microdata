import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProgramMembershipType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programMembershipUsed',
   itemScope: true,
   itemType: 'https://schema.org/ProgramMembership',
   ...props
  },
  children
 );
};

const ProgramMembershipUsed: Type & { ProgramMembership: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'programMembershipUsed',
   ...props
  },
  children
 );
};

ProgramMembershipUsed.ProgramMembership = ProgramMembershipType;

export { ProgramMembershipUsed };
