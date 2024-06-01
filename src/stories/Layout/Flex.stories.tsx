import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import './base.css'
import './flex.css'

const FlexGrow = () => {
  
  return (
    <div className='items-center justify-center flex'>
      <div className='w-[40%] h-[300px] overflow-hidden'>
        <div className="flex flex-row whitespace-nowrap">
          <div className="min-w-20 text-ellipsis overflow-hidden bg-red-500">Hele & Hela & Halo & Fella</div>
          <div className="text-ellipsis overflow-hidden bg-blue-500">中文释义很长的有可能看不到了到后来都</div>
        </div>
      </div>
    </div>
  )
}

const meta = {
  component: FlexGrow,
  // tags: ['autodocs'],
  // // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof FlexGrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
  },
};
