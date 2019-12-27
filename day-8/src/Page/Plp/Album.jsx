import React from 'react'

class Album extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isItemInFavorites: false,
    }
    this.favoritesCount = 0
  }

  handleFavorites = () => {
    this.favoritesCount = 5
    this.setState({
      isItemInFavorites: !this.state.isItemInFavorites,
    })
    console.log('this.favoritesCount ', this.favoritesCount)

    if (
      this.props.onTotalFavCount &&
      typeof this.props.onTotalFavCount == 'function'
    ) {
      this.props.onTotalFavCount(this.favoritesCount)
    }
  }
  render() {
    const album = this.props.album
    return (
      <div className="album">
        <img className="album-img" src={album.url} />
        <div className="album-title"> {album.title} </div>
        <div className="add-fav-container">
          <button onClick={this.handleFavorites}>
            {' '}
            {this.state.isItemInFavorites ? (
              'Added to Favorites'
            ) : (
              'Add to Favorites'
            )}{' '}
          </button>
        </div>
        <div>
          <button> Add items to bag </button>
        </div>
      </div>
    )
  }
}

export default Album
export { Album }
