import React from 'react'
import PropTypes from 'prop-types'
import AboutPage from '../../components/Pages/About'

const AboutPagePreview = (props) => {
    console.log('test',props)
    return (
<>
 
  <h1>
      test
  </h1>
  </>
)
    
}
    

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview