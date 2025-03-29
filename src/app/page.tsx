import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Notepad } from '@/components/ui/notepad';

export default function Home() {
  return (
    <header className='flex justify-center my-8 mx-8 h-lvh'>
      <div className='flex flex-col w-full items-center'>
        <p className='text-4xl font-mono font-bold pb-4'>Todo-List</p>
        <Notepad />
      </div>
    </header>
  );
}
