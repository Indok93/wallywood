
export const ContentWrapper = ({title, children}) => {
  return (
    <div>
        <h1>{title}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}