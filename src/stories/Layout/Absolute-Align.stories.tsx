import type { Meta, StoryObj } from '@storybook/react';
import './base.css'

const View = () => {
  
  return (
    <div className='items-center justify-center flex'>
      <div className='w-[300px]'>
        <div className="flex flex-row relative">
          <div className="text-xl">中文释义很长的有可能看不到</div>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500">Edit Delete</span>
        </div>
      </div>
    </div>
  )
}

const meta = {
  component: View,
} satisfies Meta<typeof View>;

export default meta;

export const Main: StoryObj<typeof meta> = {
};
