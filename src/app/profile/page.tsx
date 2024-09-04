import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'
export default  function Page() {
    const user =  currentUser()
    console.log( user)
  return (
    <div>
      <UserButton/>
    </div>
  )
}