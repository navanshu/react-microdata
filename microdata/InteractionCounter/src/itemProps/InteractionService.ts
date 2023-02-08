import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const InteractionService: Type & {
 SoftwareApplication: Type;
 WebSite: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'interactionService',
   ...props
  },
  children
 );
};

InteractionService.SoftwareApplication = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'interactionService',
   itemScope: true,
   itemType: 'https://schema.org/SoftwareApplication',
   ...props
  },
  children
 );
};

InteractionService.WebSite = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'interactionService',
   itemScope: true,
   itemType: 'https://schema.org/WebSite',
   ...props
  },
  children
 );
};

export { InteractionService };
