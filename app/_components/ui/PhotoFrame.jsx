function PhotoFrame({ children, variant = 'cherry', className = '' }) {
  const styles = {
    cherry: 'bg-cherry-dark p-[20px] md:p-6 xl:p-10',
    blossom: 'bg-blossom',
  };

  return (
    <div className={`rounded-img ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default PhotoFrame;
