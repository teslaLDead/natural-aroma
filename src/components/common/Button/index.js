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

export default function Button({ link, title, variant }) {
    if (variant === 'primary')
        return <ActionButton link={link} title={title} />
    else if (variant === 'secondary')
        return <SecondaryButton link={link} title={title} />
    else
        return <Link to={link}>{title}</Link>
}

export default Button