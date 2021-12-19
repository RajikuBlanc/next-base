const Layout = ({ children }: any) => {
  return (
    <>
      <main className='max-h-screen max-w-full flex justify-center items-center'>
        {children}
      </main>
    </>
  );
};

export default Layout;
