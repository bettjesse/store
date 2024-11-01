

interface PageHeaderProps {
    children : React.ReactNode
}

const PageHeader = ({children}:PageHeaderProps) => {
  return (
    <h1 className=" text-2xl mb-4 text-white  md:text-xl">{children}</h1>
  )
}

export default PageHeader