'use client';
import { HISTORY, HOME } from '@/toolbox/constants/navigation.constants';
import { House, History } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const options = [
  { label: 'Inicio', icon: House, url: HOME },
  { label: 'Historial', icon: History, url: HISTORY },
];

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className='fixed bottom-0 w-full'>
      <div className='max-w-xl mx-auto md:py-4'>
        <div className='grid grid-cols-2 bg-white rounded-t-md overflow-hidden md:rounded-md'>
          {options.map((option, index) => (
            <div
              key={index}
              className={`transition-all flex flex-col items-center cursor-pointer font-semibold text-sm p-2 md:py-3 hover:bg-red-50 ${pathname === option.url ? 'text-primary bg-red-50' : ''}`}
              onClick={() => router.push(option.url)}
            >
              <option.icon className='text-xl' />
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
