'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';

const Task = () => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (checkedValue: boolean | 'indeterminate') => {
    setChecked(!!checkedValue);
  };

  return (
    <div className='flex flex-row justify-center m-5 max-w-full min-h-auto gap-2 p-1'>
      <Checkbox
        className='mt-2.5'
        checked={checked}
        onCheckedChange={handleCheckboxChange}
      />
      <form className='w-full h-auto'>
        {/* <Input
          className={cn(
            'w-full !text-2xl overflow-y-hidden break-words',
            checked ? 'line-through text-gray-400' : 'text-base'
          )}
          type='textarea'
          placeholder='Enter task...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        /> */}
        <div
          className={cn(
            'w-full !text-2xl overflow-y-hidden break-words',
            checked ? 'line-through text-gray-400' : 'text-base',
            'focus:border-transparent focus:ring-0 !outline-none'
          )}
          contentEditable='true'
          itemType='textarea'
        />
      </form>
    </div>
  );
};

export { Task };

//Input natively does not have wordbreak so I need to change my input box to be a div much like this:
/*
<div class="m-4 max-w-full overflow-y-hidden break-words border border-solid border-black text-4xl" contenteditable="true"></div>
*/
