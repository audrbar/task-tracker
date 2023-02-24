import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {

    const onClick = () => {
        console.log('Click');
    }

  return (
    <header className='header'>
        <h2>{title}</h2>
        <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

Header.defaultProps = {
    title: PropTypes.string,
}

export default Header;
