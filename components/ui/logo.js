import Image from 'next/image'

function Logo() {
  return (
    <Image className='inline' src='/images/devchallenges.svg' alt='logo' width={118} height={18} />
  )
}

export default Logo
