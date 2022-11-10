import PropTypes from 'prop-types'

export const GitGridItem = ({ title, url }) => {

  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{ title }</p>
    </div>
  )
}

GitGridItem.propTypes = {}

