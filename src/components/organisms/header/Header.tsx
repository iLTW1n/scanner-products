import Image from 'next/image';

export const Header = () => {
  return (
    <header className='border-b border-gray-200'>
      <div className='container h-18 flex items-center text-white md:justify-center md:h-20'>
        <Image
          src='/assets/oe.svg'
          alt='oe'
          width={86}
          height={44}
        />
      </div>
    </header>
  );
};
