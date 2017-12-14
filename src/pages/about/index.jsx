import React from 'react'

class Profile extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpg'}
              alt="willsab"
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>Will Saborio</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <hr className="primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="service-box">
              <p>Hey. I’m currently an MBA student at Wharton. I spend most my time thinking about entrepreneurship and venture capital, most recently in HR tech and telecom.</p>
              <p>In my free time I enjoy coffee, whiskey, coffee whiskey, travel, fiction and non-fiction, music of recorded and live varieties, and comedy.</p>
            </div>
          </div>
          <div className="container">
              <a
                ref="twButton"
                href="https://twitter.com/willsab"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @willsab
              </a>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile