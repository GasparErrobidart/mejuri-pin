import React            from 'react'
import styled           from 'styled-components'
import { FiHeart }      from 'react-icons/fi';

import Button           from './Button'

const ItemBoxContainer = styled.div`
  background: ${({theme})=> theme.colors.white};

  &.animating {
    animation: pop-in 500ms;
  }
  @keyframes pop-in {
    from {
      opacity: 0;
      transform: scale(1.2)
    }
    to {
      opacity: 1;
      transform: scale(1.0)
    }
  }
  & img{
    width:100%;
    opacity:0;
    transition: opacity 300ms ease-out;
  }

  & img.picture-perfect-ready{
    opacity:1.0;
  }
`

const Actions = styled.div`
  display: flex;
  padding: 20px 20px 20px 20px;
  flex-direction:column;
  align-items: center;
  & > *:last-child{
    margin-top:20px;
  }
`

class ItemBox extends React.Component {

  constructor(props){
    super(props)
    this.state = { started : false , animating : false }
    this.image = React.createRef()
  }

  start(){
    this.setState({...this.state,started:true})
    this.image.current.onload = JIT_IMG(this.image.current)
  }

  componentDidMount(){
    if(!this.state.started){
      this.start()
    }
    this.setState({ animating: true })
  }

  getSrcSet(images){
    return `
      ${images.attachment_url_mini} 90w,
      ${images.attachment_url_small} 230w,
      ${images.attachment_url_medium} 650w,
      ${images.attachment_url_large} 1500w
    `
  }

  render(){
    const {product, onLike, liked} = this.props
    return (
      <ItemBoxContainer
      onAnimationEnd={() => this.setState({ animating: false })}
      className={this.state.animating ? 'animating' : ''}
      >
        <figure>
          <img
          ref={this.image}
          sizes="1vw"
          alt={product.variant_images[0].alt || product.name}
          src={"/placeholder.png"}
          lazy-srcset={this.getSrcSet(product.variant_images[0])}
          />
          <Actions>
            <figcaption>
              <h4>{product.name}</h4>
            </figcaption>
            <div>
              <Button className={liked ? "active" : ""} onClick={onLike}><FiHeart/> <span>{liked ? "Liked" : "Like"}</span></Button>
            </div>
          </Actions>
        </figure>


      </ItemBoxContainer>
    )
  }

}

export default ItemBox
