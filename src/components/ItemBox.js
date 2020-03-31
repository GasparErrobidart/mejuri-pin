import React            from 'react'
import styled           from 'styled-components'
import { FiHeart }      from 'react-icons/fi';

import Button           from './Button'

const ItemBoxContainer = styled.div`
  background: ${({theme})=> theme.colors.white};
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

const ItemBox = ({product, onLike, liked})=>{
  return (
    <ItemBoxContainer>
      <figure>
        <img src={product.variant_images[0].attachment_url_medium}/>
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

export default ItemBox
