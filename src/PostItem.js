import React from "react";
import { Link } from 'mdx-go'
import styled from "@emotion/styled";

const PostItemCnt = styled("div")`
  margin: 0 -1.6em 1em;
  line-height: 1em;

  a {
    display: block;
    text-decoration: none;
    border-bottom: 1px solid hsl(220, 80%, 20%, 0.1);
    padding: 1em 1.6em;
    border-radius: 4px;

    &:hover {
      background: hsl(220, 80%, 20%, 0.05);
    }
  }
  h2 {
    font-weight: 200;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1em;
  }

  span {
    font-size: 14px;
    color: var(--primary-color-lighter);
  }
`;

export const PostItem = (props) => (
  <PostItemCnt>
    <Link href={props.href}>
      <h2>{props.children}</h2>
      <span>{props.date}</span>
    </Link>
  </PostItemCnt>
);
