import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
