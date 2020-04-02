import React            from 'react'
import styled           from 'styled-components'
import { FiHeart }      from 'react-icons/fi';

import Button           from './Button'

const ItemBoxContainer = styled.div`
  background: ${({theme})=> theme.colors.white};
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
    this.state = { started : false }
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
      <ItemBoxContainer>
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
