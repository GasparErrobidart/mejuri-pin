import styled                 from 'styled-components'
import React                  from 'react'
import { FiHeart }            from 'react-icons/fi'
import { connect }            from 'react-redux'
//ACTIONS
import {addFilter}            from '../actions/filterActions'

const HeartContainerWrapper = styled.div`
  font-family: ${({theme})=> theme.fonts.blockTextFamily};
  font-size: 30px;
  text-align: left;
  position: relative;
  cursor:pointer;
  & *[animated-heart]{
    color: red;
    position:absolute;
    opacity:0;
  }
  & *[animated-heart].animating {
    animation: pop 700ms;
  }
  @keyframes pop {
    from {
      opacity: 1;
      transform: scale(1.0);
    }
    to {
      opacity: 0;
      transform: scale(1.5);
    }
  }
  & > span{
    position: absolute;
    font-size: 12px;
    display: inline-block;
    padding: 2px;
    font-weight: 400;
    margin-left: 22px;
    margin-top: 10px;
    text-align: center;
    border-radius: 2px;
    background: ${({theme})=> theme.colors.darkMiddleGray};
    color: white;
    left: 0;
    top:0;
  }
`

class HeartContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = { animating : false }
  }

  componentDidUpdate(prevProps){
    if(prevProps.likes.length < this.props.likes.length){
      this.animateHeart()
    }
  }

  animateHeart(){
    this.setState({ animating : true })
  }

  handleClick(){
    this.props.addFilter({
      id   : "liked",
      name : "Liked"
    })
    this.setState({ animating: true })
  }

  render(){
    const {likes} = this.props
    return (
      <HeartContainerWrapper
        onClick={this.handleClick.bind(this)}
        >
        <div
          animated-heart="true"
          onAnimationEnd={() => this.setState({ animating: false })}
          className={this.state.animating ? 'animating' : ''}
          >
          <FiHeart/>
        </div>
        <FiHeart/><span>{likes.length}</span>
      </HeartContainerWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      likes : state.likes
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addFilter: (filter) => {
          dispatch(addFilter(filter));
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeartContainer);
