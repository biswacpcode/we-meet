'use client'
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

const MeetingSetup = ({setIsSetUpComplete}: {setIsSetUpComplete: (calue:boolean)=>void}) => {
    const call = useCall();
    if(!call) throw new Error ("useCall must be used in StreamCall")

    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
    useEffect(()=>{
      if(isMicCamToggledOn){
        call.camera.disable();
        call.camera.disable();

      }else{
        call.camera.enable();
        call.microphone.enable();
      }

    }, [isMicCamToggledOn, call.camera, call.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>
            SetUp
        </h1>

        <VideoPreview/>

        <div className='flex h-16 justify-center gap-3 items-center'>
          <label className='flex justify-center items-center gap-2 font-medium'>
            <input type="checkbox" 
            checked={isMicCamToggledOn}
            onChange={(e)=>setIsMicCamToggledOn(e.target.checked)}
            />

            Join with Mic and Camera Off
          </label>
          <DeviceSettings/>

        </div>

        <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={()=>{
            call.join();
            setIsSetUpComplete(true);
        }}>
          Join Meeting

        </Button>

    </div>
  )
}

export default MeetingSetup