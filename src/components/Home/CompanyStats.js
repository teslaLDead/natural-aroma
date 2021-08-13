import React from "react";
import { jsx, css } from "@emotion/react";

// todo - add animation
const style = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop:150,
        marginBottom:150
    },
    stat: {
        fontFamily: "AxiformaBlack",
        fontSize: 38
    },
    title: {
        fontFamily: "AxiformaBlack",
        fontSize: 16
    },
    statItem: {
        justifySelf: 'center'
    }
}

// todo - connect with the data layer
export default function ComapnyStats({ clients, products }) {
    return (
        <div css={css(style.container)}>
            <div css={css(style.statItem)}>
                <p css={css(style.stat)}>
                    {clients}+
                </p>
                <p css={css(style.title)}>
                    SATISFIED CLIENTS
                </p>
            </div>
            <div css={css(style.statItem)}>
                <p css={css(style.stat)}>
                    {products}+
                </p>
                <p css={css(style.title)}>
                    TOTAL PRODUCTS
                </p>
            </div>
            <div css={css(style.statItem)}>
                <p css={css(style.stat)}>
                    100%
                </p>
                <p css={css(style.title)}>
                    CUSTOMER SATISFACTION
                </p>
            </div>
        </div>
    )
}