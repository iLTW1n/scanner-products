'use client';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { codeSchema, CodeSchema } from '@/toolbox/types/code.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const Home = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<CodeSchema>({
    resolver: zodResolver(codeSchema),
  });

  const onSubmit = () => {
    console.log('dsdas')
  }
  console.log('errors', errors);
  return (
    <div className='container text-center flex justify-center flex-col py-10 md:py-16'>
      <h1 className='text-5xl font-extrabold md:text-7xl'>Scanly</h1>
      <p className='mt-1'>Busca productos por código o escaneo.</p>

      <div className='w-full max-w-xl mx-auto'>
        <div className='mt-10 grid gap-2 md:grid-cols-[1fr_160px] w-full'>
          <Input
            placeholder='Código (6 - 13 dígitos)'
            message={errors.code?.message}
            status={errors?.code ? 'error' : undefined}
            {...register('code')}
          />
          <Button onClick={handleSubmit(onSubmit)}>Buscar</Button>
        </div>
        <div className='my-10 relative before:content-[""] before:-z-1 before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-px before:bg-gray-200'>
          <span className='bg-white inline-block px-2'>ó</span>
        </div>
        <Button variant='secondary' className='md:h-12!'>Escanea tu producto</Button>
      </div>
    </div>
  );
};
