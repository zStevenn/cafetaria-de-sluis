function ContentWrapper({ children }) {
  return (
    <div className="mx-auto max-w-screen-lg">
      {children}
    </div>
  )
}

export default ContentWrapper
