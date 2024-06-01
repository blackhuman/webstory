import type { Meta, StoryObj } from '@storybook/react';
import './flex.css'

const View = () => {
  
  return (
    <div className='m-auto w-10'>
      ABC
    </div>
  )
}

const meta = {
  component: View,
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
  },
};
