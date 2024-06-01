import type { Meta, StoryObj } from '@storybook/react';
import './base.css'

const View = () => {
  
  return (
    <div className='items-center justify-center flex'>
      <div className='w-[300px]'>
        {/* box-shadow */}
        <div className="flex flex-row gap-2">
          <div className={`
            min-w-28 max-w-[60%] 
            inline-block overflow-hidden text-base font-bold 
            whitespace-nowrap text-ellipsis bg-white 
            hover:overflow-visible 
            hover:relative
          `}>
            <span className="bg-white shadow-[10px_0px_5px_white]">
              setting her mind and forging
            </span>
          </div>
          <div className="text-base px-3 text-ellipsis whitespace-nowrap overflow-hidden">中文释义很长的有可能看不到</div>
        </div>

        {/* pr-3 */}
        <div className="flex flex-row relative gap-2">
          <div className='min-w-28 max-w-[60%] overflow-hidden text-base font-bold whitespace-nowrap text-ellipsis bg-white hover:overflow-visible relative'>
            <span className="bg-white pr-3">
              setting her mind and forging
            </span>
          </div>
          <span className="text-base px-3 text-ellipsis whitespace-nowrap overflow-hidden">中文释义很长的有可能看不到</span>
        </div>

        {/* max-w-[50%] */}
        <div className="flex flex-row relative overflow-hidden">
          <div className={`
            min-w-28 
            text-base font-bold bg-white 
            overflow-hidden whitespace-nowrap text-ellipsis
            hover:overflow-visible
            relative flex-[0_0_100%]
          `}>
            <span className="bg-white">
              setting her mind and forging, setting her mind and forging
            </span>
          </div>
          <div className={`
            text-base px-3 
            text-ellipsis whitespace-nowrap 
            overflow-hidden
            flex-[0_1_0%]
          `}>中文释义很长的有可能看不到</div>
        </div>

        {/* max-w-[50%] */}
        <div className="flex flex-row relative">
          <div className={`
            min-w-28 max-w-[50%] 
            text-base font-bold bg-white shadow-[10px_0px_5px_white]
            overflow-hidden whitespace-nowrap text-ellipsis
            peer/word
          `}>
            setting her mind and forging, setting her mind and forging
          </div>
          <div className={`
            text-base font-bold bg-white shadow-[10px_0px_5px_white]
            absolute top-0 left-0
            hidden
            peer-hover/word:block peer-hover/word:pointer-events-none
          `}>
            setting her mind and forging, setting her mind and forging
          </div>
          <div className={`
            text-base px-3 bg-white
            text-ellipsis whitespace-nowrap overflow-hidden
            peer/def
          `}>中文释义很长的有可能看不到</div>
          <div className={`
            text-base px-3 bg-white
            absolute top-0 right-0 hidden
            peer-hover/def:block peer-hover/def:pointer-events-none
          `}>中文释义很长的有可能看不到</div>
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
