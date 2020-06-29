import React from "react";
import styled from "@emotion/styled";
import signatureImg from "./3ad39970a957a5f28905d8030813c3fb.png"

const HeadPhotoCnt = styled("div")`
  position: relative;
  margin: -3em -3em 0;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    vertical-align: top;
    background: #000000;
    border-radius: 5px 5px 0px 0px;
  }

  div {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.5em;
    background: rgba(0, 0, 0, 0.7);
    color: #FFFFFF;
    font-size: 12px;
    font-family: var(--sans-serif-font);
    line-height: 1em;
    opacity: 0.5;

    a {
      color: inherit;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const HeadPhoto = (props) => (
  <HeadPhotoCnt>
    <img src={props.src} alt={props.alt} />
    {props.author && <div>{props.author}</div>}
    {props.children && <div>{props.children}</div>}
  </HeadPhotoCnt>
);

export const Signature = () => <div style={{textAlign: "left"}}><img src={signatureImg} style={{
  height: "32px"
}} /></div>;
