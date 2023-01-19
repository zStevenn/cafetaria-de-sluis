function ContentWrapper({ children }) {
  return (
    <div className="xl:max-w-screen-lg xl:mx-auto">
      {children}
    </div>
  )
}

export default ContentWrapper
