import Link from 'next/link'
import Form from '../ui/form'
import Logo from '../ui/logo'
import Input from '../ui/input'
import Button from '../ui/button'
import SocialProfile from '../ui/social-profile'

function Auth() {
  return (
    <Form>
      <Logo />
      <h2 className='font-semibold mt-7 text-lg'>
        Join thousands of learners from around the world
      </h2>
      <p className='mt-4 mb-8 font-normal text-base'>
        Master web development by making real-life projects. There are multiple paths for you to
        choose
      </p>
      <Input icon='/images/email.svg' type='email' placeholder='Email' />
      <Input icon='/images/lock.svg' type='password' placeholder='Password' />
      <Button text='Start coding now' />

      <p className='font-normal text-sm mt-8 mb-6 text-center text-placeholders'>
        or continue with these social profile
      </p>
      <div className='flex justify-center'>
        <SocialProfile icon='/images/Google.svg' altText='Google' />
        <SocialProfile icon='/images/Facebook.svg' altText='Facebook' />
        <SocialProfile icon='/images/Twitter.svg' altText='Twitter' />
        <SocialProfile icon='/images/Github.svg' altText='Github' />
      </div>
      <p className='font-normal text-sm text-center mt-7 text-placeholders'>
        Already a member?
        <Link href='/'>
          <a className='text-btn ml-1'>Login</a>
        </Link>
      </p>
    </Form>
  )
}

export default Auth
