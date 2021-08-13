import React from "react";
import { Link } from "gatsby";
import { jsx, css } from '@emotion/react';

const SecondaryButton = ({ link, title }) => {
    return (
        // todo - add click and hover animations
        <Link to={link}>
            <div css={css({
                background: 'white',
                padding: '0 34px',
                borderColor: '#56C035',
                borderStyle: 'solid',
                height: 50,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 8,
                borderWidth: 2.5
            })}>
                <p css={css({
                    fontSize: 14,
                    color: '#0C0C0C',
                    fontFamily: 'AxiformaRegular',
                    fontWeight: 'bold'
                })}>
                    {title}
                </p>
            </div>
        </Link>
    )
}

export default SecondaryButton