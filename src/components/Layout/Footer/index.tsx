import {Github} from "@components/Icons/Github";
import {Linkedin} from "@components/Icons/Linkedin";
import {Twitter} from "@components/Icons/Twitter";
import {layoutStyles} from "@components/Layout/styles";

export const Footer = () => {
  return (
      <footer style={layoutStyles}>
          <Github />
          <Linkedin />
          <Twitter />
      </footer>
  )
}