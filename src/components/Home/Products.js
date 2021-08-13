import React from "react";
import { css } from "@emotion/react";
import ProductSection from "./ProductSection";
import Typography from "common/Typography";
const products = () => {
    return []
}
export default function Products() {
    return (
        <div css={css({
            marginTop:150,
            marginBottom:150
        })}>
            <div css={css({
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: "column",
                marginTop:100,
                marginBottom:100
            })}>
                <Typography variant="h2">
                    PRODUCTS
                </Typography >
                <Typography variant="p"
                // todo add responsiveness
                    style={{
                        maxWidth: '55%'
                    }}>
                    We are manufacturing <b>Natural Essential Oils</b>, <b>Aroma Oils </b>, <b>Natural Isolates</b>, and <b>Reconstituted Oils</b> on a large
                    scale. Our products are exported across the globe and we have firm presence in Europe, Asia, North America, Middle
                    East etc. and continuing to expand through out world by serving products of International standards.
                </Typography>
            </div>
            <div>
                {products().map(product => <ProductSection {...product} />)}
            </div>

        </div>
    )
}