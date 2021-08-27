import React from "react";
import { jsx, css } from "@emotion/react";
import Typography from "../Typography";

const Header = ({ variant,children  }) => {
    const style = css({
        minHeight: variant==="secondary" ?  '70vh' : '100vh',
        display:'grid',
        gridTemplateColumns:'repeat(12, 1fr)',
        h1:{
            gridColumnStart:'1',
            gridColumnEnd:'7',
            alignSelf:'center'
        }
    })
    return (
        <div css={css(style)}>
            <Typography variant="h1" css={css({
                alignSelf:'center'
            })}>
                {children}
            </Typography>
        </div>
    )

}

export default Header;