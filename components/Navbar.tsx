

interface NavbarProps {
    children : React.ReactNode
}

const Navbar = ({children}:NavbarProps) => {
  return (
    <div className=" bg-blue-400 text-white flex justify-center px-4">{children}</div>
  )
}

export default Navbar