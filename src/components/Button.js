import styled     from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  &.MuiButton-containedPrimary{
    font-size: 1em;
    color: ${({theme})=> theme.colors.white};
    background-color: ${({theme})=> theme.colors.yellow};
    text-shadow: 1px 1px 0px ${({theme})=> theme.colors.darkYellow};
  }
  &.MuiButton-containedPrimary:hover{
    background-color: ${({theme})=> theme.colors.darkYellow};
  };
`

export default StyledButton;
