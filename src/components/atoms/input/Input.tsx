import { cva, VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

const input = cva('...', {
  variants: {
    variant: {
      primary: 'bg-white border border-gray-400 rounded-lg w-full outline-0 h-12 px-4 text-sm font-semibold placeholder:text-sm placeholder:font-semibold md:h-15',
    },
    status: {
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
    }
  },
  defaultVariants: {
    variant: 'primary',
  }
})

type Props = {
  status?: 'error' | 'success' | 'warning';
  message?: string;
} & InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof input>;

export const Input = (props: Props) => {
  const { message, className, ...rest } = props;

  return (
    <div className='text-left'>
      <input
        type='text'
        className={input({ ...props, className })}
        {...rest}
      />
      {message && <span className='text-red-500 text-xs font-semibold'>{message}</span>}
    </div>
  );
};
