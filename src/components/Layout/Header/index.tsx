import Button from "@mui/material/Button";
import {layoutStyles} from "@components/Layout/styles";
import { Link } from "@mui/material";


export const Header = () => {
  return(
      <header style={layoutStyles}>
          <Button 
            style={{textTransform: 'none'}} 
            component={Link}
            href="/static/resume.pdf"
            target="_blank"
            >
              My resume
          </Button>
      </header>
  )
}