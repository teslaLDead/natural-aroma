import React from "react"
import { jsx, css } from "@emotion/react"

const typography = {
  h1: {
    fontSize: 54,
    color: "black",
    fontFamily: "AxiformaBlack",
    "& .underline": {
      position: "relative",
      "&:after": {
        left: 0,
        bottom: 1,
        content: '""',
        position: "absolute",
        width: "100%",
        height: 8,
        background: "#56c035",
      },
    },
  },
  h2: {
    fontSize: 36,
    color: "black",
    fontFamily: "AxiformaBlack",
  },
  h3: {
    fontSize: 24,
    color: "black",
    fontFamily: "AxiformaBlack",
  },
  h4: {
    fontSize: 16,
    color: "black",
    fontFamily: "AxiformaBlack",
  },
  p: {
    fontSize: 14,
    color: "black",
    "& b": {
      fontFamily: "AxiformaBlack",
    },
  },
}
export default function Typography({ variant, style, children, className }) {
  switch (variant) {
    case "h1":
      return <h1 css={css(style, typography.h1, className)}>{children}</h1>
      break
    case "h2":
      return <h2 css={css(style, typography.h2, className)}>{children}</h2>
      break
    case "h3":
      return <h3 css={css(style, typography.h3, className)}>{children}</h3>
      break
    case "h4":
      return <h4 css={css(style, typography.h4, className)}>{children}</h4>
      break
    case "p":
      return <p css={css( typography.p, style)}>{children}</p>
      break
    default:
      return <p css={css(typography.p, style, )}>{children}</p>
      break
  }
}
