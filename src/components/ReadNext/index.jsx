import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class ReadNext extends React.Component {
  render() {
    const data = this.props.data
    const title = get(data, 'meta.title')
    const author = get(data, 'meta.author')

    return (
      <div className="footer">
        <hr />
        <Link to="/">
          home
        </Link>
      </div>
    )
  }
}

export default ReadNext
