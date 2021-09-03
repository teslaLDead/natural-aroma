import React from 'react'
import PropTypes from 'prop-types'
import AboutPage from '../../components/Pages/About'

const AboutPagePreview = ({ entry}) => (
  <AboutPage
    title={entry.getIn(['data', 'title'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview