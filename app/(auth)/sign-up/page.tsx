import AuthForm from '@/app/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const SignUp = async () => {
  return (
   <section className="flex-centre size-full max-smi:px-6">
    <AuthForm type="sign-up"/>
   </section>
  )
}

export default SignUp