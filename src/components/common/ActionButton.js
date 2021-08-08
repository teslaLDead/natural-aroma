import React from "react";
import { Link } from "gatsby";
import { jsx, css } from '@emotion/react';

const ActionButton = ({ link, title }) => {
    return (
        // todo - add click and hover animations
        <Link to={link}>
            <div css={css({
                background: '#56C035',
                padding: '0 34px',
                height: 50,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 8
            })}>
                <p css={css({
                    fontSize: 14,
                    color: 'white',
                    fontFamily: 'AxiformaBlack'
                })}>{title}
                </p>
            </div>
        </Link>
    )
}

export default ActionButton