import React  from 'react'

class Spy extends React.Component{

  constructor(props){
    super(props)
    this.wrapper = React.createRef()
    this.verifyProximity = this.verifyProximity.bind(this)
  }

  verifyProximity(event){
    const { proximityThreshold = 0 , onProximity } = this.props
    const rect = this.wrapper.current.getBoundingClientRect();
    if(
      rect.top - window.innerHeight - proximityThreshold <= 0 &&
      rect.top + rect.height + proximityThreshold >= 0
    ){
      if(onProximity) onProximity(this.wrapper)
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.verifyProximity)
    window.addEventListener('resize', this.verifyProximity)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.verifyProximity)
    window.removeEventListener('resize', this.verifyProximity)
  }

  render(){
    const {children} = this.props
    return(
      <div ref={this.wrapper}>
        {children}
      </div>
    )
  }

}

export default Spy
