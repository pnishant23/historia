import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'

const Settings = () => {
  return (
    <div className='mx-auto w-[400px]'>
      <div>Mode</div><ModeToggle />
    </div>
  )
}

export default Settings