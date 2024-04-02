

interface PageHeaderProps {
    children : React.ReactNode
}

const PageHeader = ({children}:PageHeaderProps) => {
  return (
    <h1 className=" text-2xl mb-4">{children}</h1>
  )
}

export default PageHeader