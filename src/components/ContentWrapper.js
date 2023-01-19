function ContentWrapper({ children }) {
  return (
    <div className="lg:w-3/5 lg:flex lg:flex-col lg:justify-center">
      {children}
    </div>
  )
}

export default ContentWrapper
