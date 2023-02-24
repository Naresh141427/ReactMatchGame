import './index.css'

const ThumbnailItem = props => {
  const {imageObject, checkingCorrectImage} = props
  const {id, thumbnailUrl} = imageObject

  const onClickingThumbnail = () => {
    checkingCorrectImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="image-button"
        type="button"
        onClick={onClickingThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
