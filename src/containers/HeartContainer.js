import styled                 from 'styled-components'
import React                  from 'react'
import { FiHeart }            from 'react-icons/fi'
import { connect }            from 'react-redux'

const HeartContainerWrapper = styled.div`
  font-family: ${({theme})=> theme.fonts.blockTextFamily};
  font-size: 30px;
  text-align: left;
  position: relative;
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

const HeartContainer = ({likes})=>(
  <HeartContainerWrapper>
    <FiHeart/><span>{likes.length}</span>
  </HeartContainerWrapper>
)

const mapStateToProps = (state) => {
  return {
      likes : state.likes
  }
}

export default connect(mapStateToProps,null)(HeartContainer);
