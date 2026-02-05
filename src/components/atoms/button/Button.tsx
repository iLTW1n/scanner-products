import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('rounded-md cursor-pointer font-semibold text-sm h-12 w-full md:h-15', {
  variants: {
    variant: {
      primary: 'text-white bg-primary hover:bg-primary-hover active:bg-primary-active',
      secondary: 'bg-white border border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: undefined
    },
  },
  defaultVariants: {
    disabled: false,
    variant: "primary",
  },
})

type Props = {} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & VariantProps<typeof button>;

export const Button = (props: Props) => {
  const { children, className, disabled, ...rest } = props;

  return (
    <button
      className={button({ ...props, disabled, className })}
      disabled={disabled || undefined}
      {...rest}
    >
      {children}
    </button>
  );
};
