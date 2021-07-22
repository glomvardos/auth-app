function Form({ children, onSubmitHandler }) {
  return (
    <form className='md:px-14 md:py-12 p-4  border-1 border-solid border-borderColor rounded-3xl max-w-lg mx-auto my-auto'>
      {children}
    </form>
  )
}

export default Form
