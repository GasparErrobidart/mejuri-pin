import React    from 'react'
import styled   from 'styled-components'

import {
  FiCheck,
  FiAlertCircle
}               from 'react-icons/fi';

const MessageBoxContainer = styled.div`
  padding: 20px;
  background: ${({theme})=> theme.colors.blue};
  color : ${({theme})=> theme.colors.lightGray};
  margin: 10px 0;
`;

const MessageBox = (props)=>{
  let { variant , message } = props
  let icon = null
  let messageBox = null

  switch (variant) {
    case 'success':
      icon = (<FiCheck/>)
      break;
    case 'error':
      icon = (<FiAlertCircle/>)
      break;
  }

  if(message){
    messageBox = (
      <MessageBoxContainer {...props} >
        {icon} {message}
      </MessageBoxContainer>
    )
  }

  return(messageBox)
}

export default MessageBox;
