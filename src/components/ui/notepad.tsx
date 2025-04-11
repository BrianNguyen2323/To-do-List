'use client';

import { Task } from '@/components/ui/task';
import { Newtask } from '@/components/ui/newtask';

function Notepad() {
  return (
    <div className='h-screen rounded-lg w-full border-2 border-zinc-400 bg-zinc-800 backdrop-blur-sm'>
      <ul className='w-full'>
        <Task />
        <Newtask />
      </ul>
    </div>
  );
}

export { Notepad };
