import React from "react";
import { jsx, css } from "@emotion/react"
import { Link } from "gatsby";
import HeroImage from '../../images/get quote image.jpg';
import ActionButton from "../common/ActionButton";

const ContactForm = ({ }) => {
    return (
        <div css={css({
            // paddingTop: 100,
            minHeight: 350,
            margin: '50px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(12,1fr)',
            gridColumnGap: 15
            // position:'relative'

        })}>
            <div css={css({
                position: 'absolute',
                left: 0,
                zIndex: 0
                // top:0
            })}>
                <img src={HeroImage} alt="Get a quote from natural aroma" />
            </div>
            <div css={css({
                position: 'relative',
                gridColumnStart: 2,
                gridColumnEnd: 9,
                alignSelf: 'center'
            })}>
                <p css={css({
                    color: 'white',
                    fontFamily: "AxiformaBlack",
                    fontSize: 28
                })}>
                    We manufacture and export wide range of
                    oils and aroma products.
                </p>
            </div>
            <div css={css({
                gridColumnStart: 10,
                gridColumnEnd: 12,
                display:'flex',
                position: 'relative',
                alignSelf: 'center'
            })}>
                <div>
                    <ActionButton to="/contact-us" title="Get a Quote" />
                </div>

            </div>

        </div>
    )
}

export default ContactForm