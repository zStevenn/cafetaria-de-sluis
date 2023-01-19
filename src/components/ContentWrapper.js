function ContentWrapper({ children }) {
  return (
    <div className="xl:max-w-screen-lg">
      {children}
    </div>
  )
}

export default ContentWrapper
