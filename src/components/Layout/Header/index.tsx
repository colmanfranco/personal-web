import Button from "@mui/material/Button";
import {layoutStyles} from "@components/Layout/styles";

export const Header = () => {
  return(
      <header style={layoutStyles}>
          <a href='/static/resume.pdf' target='_blank'>
          <Button style={{textTransform: 'none',}}>My resume</Button>
          </a>
      </header>
  )
}