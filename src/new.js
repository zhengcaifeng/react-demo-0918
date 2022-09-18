function New(props) {
  //   console.log(props.children, '==传值')
  props.children()
  return (
    <div>
      我是新闻严
      {/* <p>{props.children}</p> */}
    </div>
  )
}

export default New
