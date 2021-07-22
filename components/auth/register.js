import Form from '../ui/form'
import Logo from '../ui/logo'
import Input from '../ui/input'
import Button from '../ui/button'

function Register() {
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
    </Form>
  )
}

export default Register
