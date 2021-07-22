function Button({ text }) {
  return (
    <button className='bg-btn text-white w-full mt-2 py-2 font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:opacity-90'>
      {text}
    </button>
  )
}

export default Button
