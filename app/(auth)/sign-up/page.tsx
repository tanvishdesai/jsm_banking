import AuthForm from '@/app/components/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
   <section className="flex-centre size-full max-smi:px-6">
    <AuthForm type="sign-up"/>
   </section>
  )
}

export default SignUp