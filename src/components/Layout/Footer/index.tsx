import {Github} from "@components/Icons/Github";
import {Linkedin} from "@components/Icons/Linkedin";
import {Twitter} from "@components/Icons/Twitter";
import {layoutStyles} from "@components/Layout/styles";
import {createElement} from "react";

const socialNetworks = [
    {
        icon: Github,
        url: 'https://github.com/colmanfranco/personal-web'
    },
    {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/franco-colman/'
    },
    {
        icon: Twitter,
        url: 'https://twitter.com/FMcolman'
    },
]

export const Footer = () => {
  return (
      <footer style={layoutStyles}>
          {socialNetworks.map((element) => {
              return (
                  <a key={element.url} href={element.url} target='_blank' rel='noreferrer'>
                      {createElement(element.icon)}
                  </a>
              )
          })}
      </footer>
  )
}