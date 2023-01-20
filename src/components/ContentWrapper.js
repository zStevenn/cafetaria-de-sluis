function ContentWrapper({ children }) {
  return (
    <div className="xl:max-w-screen-lg xl:flex xl:flex-col xl:justify-center">
      {children}
    </div>
  )
}

export default ContentWrapper
