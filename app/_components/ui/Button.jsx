function Button({ children, ...props }) {
  return (
    <button
      type='button'
      className='w-fit px-10 py-3 md:px-12 xl:px-16 xl:py-4 rounded-full text-blossom-light text-2xl md:text-[32px] xl:text-5xl font-extrabold leading-[1.25] tracking-[1%] md:tracking-[0.5%] bg-cherry'
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
