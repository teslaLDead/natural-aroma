import React from "react";
import { jsx, css } from "@emotion/react";

const typography = {
    h1: {
        fontSize: 54,
        color: 'black',
        fontFamily:"AxiformaBlack",
        '& .underline':{
            position:'relative',
            "&:after":{
                left:0,
                bottom:1,
                content:'""',
                position:'absolute',
                width:'100%',
                height:8,
                background:'#56c035'
            }
            
        }
    },
    h2: {
        fontSize: 28,
        color: 'black',
        fontFamily:"AxiformaBlack"
    },
    p: {
        fontSize: 14,
        color: 'black',
        "& b":{
            fontFamily:"AxiformaBlack"
        }
    },
   
    
}
export default function Typography({ variant, style, children }) {
    switch (variant) {
        case "h1":
            return <h1 css={css(style, typography.h1)}>
                {children}
            </h1>
            break;
        case "h2":
            return <h2 css={css(style, typography.h2)}>
                {children}
            </h2>
            break;
        case "p":
            return <p css={css(style, typography.p)}>
                {children}
            </p>
            break
        default:
            break;
    }
}