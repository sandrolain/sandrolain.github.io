import React from "react";
import { ComponentProvider } from "mdx-go";
import { Global, css } from '@emotion/core';
import styled from "@emotion/styled";
import photo from "./photo.jpg";
import vaporwave from "./vaporwave.jpeg";

import Highlight from 'react-highlight.js';
import highlightStyle from './shades-of-purple.css';

const components = {
  h1: (props) => <h1>{props.children}</h1>,
  code: (props) => {
    let lang = "javascript";
    if(props.className && props.className.match(/-css/)) {
      lang = "css";
    }
    return <Highlight language={lang}>{props.children}</Highlight>
  }
};

const Container = styled("div")`
  max-width: 768px;
  margin: 0 auto;
`;

const Header = styled("header")`
  padding: 1em 0;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  font-family: var(--sans-serif-font);

  em {
    font-family: var(--serif-font);
  }

  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    margin-right: 1em;
  }

  a {
    font-size: 1.618em;
    color: inherit;
    text-decoration: none;
    font-weight: lighter;
  }

  @media (max-width: 768px) {

    & {
      justify-content: center;
    }
    & img {
      display: none;
    }
  }
`;

const Body = styled("main")`
  background: #FFFFFF;
  color: var(--not-black-color);
  padding: 3em;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const Footer = styled("footer")`
  padding: 2em;
  background: var(--primary-color-verydark-50);
  backdrop-filter: blur(6px);
  line-height: 1em;
  margin: 1em 0;
  color: #FFFFFF;
  display: flex;
  border-radius: 6px;

  div {
    flex: 1;
    font-size: 0.8em;
    color: var(--primary-color-lighter);
  }

  div:last-child {
    text-align: right;
  }

  a {
    color: inherit;
  }
`;

export const Root = (props) => (
  <ComponentProvider components={components}>
    <Global
      styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      @import url(${highlightStyle});

      :root {
        --sans-serif-font: 'Oswald', sans-serif;
        --serif-font: 'Playfair Display', serif;
        --primary-color-verydark: hsl(240, 100%, 10%);
        --primary-color-verydark-50: hsl(240, 100%, 10%, 0.3);
        --primary-color-dark: hsl(220, 80%, 20%);
        --primary-color-light: hsl(240, 50%, 40%);
        --primary-color-lighter: hsl(220, 60%, 60%);
        --not-black-color: hsl(220, 40%, 10%);
      }

        html, body {
          margin: 0;
          padding: 0;
          font-size: 20px;
        }
        html {
          min-height: 100%;
        }
        body {
          font-family: 'Playfair Display', serif;
          line-height: 1.8em;
          min-height: 100%;
          background: #000000;
          background-image:
            url(${vaporwave}),
            linear-gradient(180deg, var(--primary-color-dark), var(--primary-color-verydark));
          background-size: 100% auto, 100% 100vh;
          background-position: 50% 100%;
          background-attachment: fixed;
          background-blend-mode: screen;
          background-repeat: repeat-x, repeat;
        }
        a {
          color: #002266;
        }

        h1 {
          font-family: var(--sans-serif-font);
          color: var(--primary-color-light);
          font-weight: 200;
          font-size: 2.2em;
          margin-top: 1.2em;
          line-height: 1em;
        }

        h2 {
          font-family: var(--sans-serif-font);
          color: var(--primary-color-dark);
          font-weight: 400;
          font-size: 1.6em;
          margin-top: 1.2em;
          line-height: 1em;
        }

        .hljs {
          padding: 1.6em;
          margin: 2em -1.6em;
          border-radius: 3px;
          font-size: 16px;
          line-height: 1.6em;
          background-color: var(--primary-color-verydark);
        }
      `}
    />
    <Container>
      <Header>
        <img src={photo} />
        <a href="/">Sandro Lain <em>Personal Blog</em></a></Header>
      <Body>
        {props.children}
      </Body>
      <Footer>
        <div>
          me @ <a href="https://github.com/sandrolain">github</a> - <a href="http://it.linkedin.com/in/sandrolain">linkedin</a> - <a href="http://twitter.com/elettryxande/">twitter</a>
        </div>
        <div>
          Made with <a href="https://jxnblk.github.io/mdx-go/">mdx-go</a>
        </div>
      </Footer>
    </Container>
  </ComponentProvider>
);
