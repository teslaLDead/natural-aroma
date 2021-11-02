/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")

exports.onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
  ])
  setBodyAttributes({
    className: "preloader_active",
  })
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <img src="/static/images/Logo.svg" alt="logo" style={{ height: 200 }} />
      <div className="preloader_animation"></div>
    </div>,
  ])
  setPostBodyComponents([<script src="/scripts/preloader.js" />])
}
