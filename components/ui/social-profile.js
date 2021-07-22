function SocialProfile({ icon, altText }) {
  return (
    <img
      src={icon}
      alt={`${altText} icon`}
      className='mr-5 cursor-pointer transition-all duration-200 hover:opacity-90'
    />
  )
}

export default SocialProfile
