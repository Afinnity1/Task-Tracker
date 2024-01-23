const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <h2>{title}</h2>
        <button style={{background: 'green'}}  className='btn'  onClick={onAdd}> ADD </button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task tracker'
}

export default Header
