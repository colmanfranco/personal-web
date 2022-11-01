import Button from "@mui/material/Button";
import {layoutStyles} from "@components/Layout/styles";

export const Header = () => {
  return(
      <header style={layoutStyles}>
          <img src='/static/white-logo.svg' alt='Personal logo' height="50"/>
          <Button style={{textTransform: 'none',}}>My resume</Button>
      </header>
  )
}