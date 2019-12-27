import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import albumData from './data'
import { Album } from './Album'

import './styles.scss'

class Plp extends React.Component {
  static defaultProps = {
    bagValues: {
      isToRenderAddToBag: true,
      addToBagText: 'Add items to bag',
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      totalFavCount: 0,
    }
  }
  handleTotalFavCount = totalCount => {
    this.setState({
      totalFavCount: totalCount,
    })
    // console.log('totalCount ', totalCount)
  }

  renderAlbum = () => {
    const isToRenderAddToBag = this.props.bagValues
    // const album = albumData[0]

    return albumData.map((album, idx) => {
      return (
        <Album
          album={album}
          key={idx}
          onTotalFavCount={this.handleTotalFavCount}
        />
      )
    })
  }

  render() {
    console.log('inside render function')
    // console.log('catalog id ', this.props.match.params.catalogId)
    return (
      <React.Fragment>
        <div className="plp-title">Welcome to PLP page </div>
        <Link to="/">Back to home page</Link>
        <div className="album-fav-count">
          {' '}
          current Favorites Count : {this.state.totalFavCount}{' '}
        </div>
        <div className="album-container">{this.renderAlbum()}</div>
      </React.Fragment>
    )
  }
}

export default Plp
export { Plp }
