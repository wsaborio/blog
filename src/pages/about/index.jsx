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
              <p>Hey. I’m currently a Solutions Engineer at a San Francisco-based startup called Checkr.</p>
              <p>Outside of work I spend a lot of time thinking about entrepreneurship and venture capital, especially in HR tech and insurance. I enjoy coffee, whiskey, coffee whiskey, tinkering with front-ends and data, travel, fiction and non-fiction, music of recorded and live varieties, comedy, lists, and self-referential humor.</p>
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