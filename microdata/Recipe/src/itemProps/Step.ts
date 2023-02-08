import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Step: Type & {
 HowToStep: Type;
 HowToSection: Type;
 CreativeWork: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'step',
   ...props
  },
  children
 );
};

Step.HowToStep = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'step',
   itemScope: true,
   itemType: 'https://schema.org/HowToStep',
   ...props
  },
  children
 );
};

Step.HowToSection = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'step',
   itemScope: true,
   itemType: 'https://schema.org/HowToSection',
   ...props
  },
  children
 );
};

Step.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'step',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

export { Step };
