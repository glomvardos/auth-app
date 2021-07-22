function Input({ icon, type, placeholder }) {
  return (
    <div className='flex items-center mb-4 px-3 py-4 border-1 border-solid border-borderColor rounded-lg '>
      <img src={icon} alt='' className='mr-4' />
      <input
        type={type}
        placeholder={placeholder}
        required
        className='border-0 w-full focus:outline-none placeholder-placeholders '
      />
    </div>
  )
}

export default Input
