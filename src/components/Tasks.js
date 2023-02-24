import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks }) => {

  return (
    <>
        {tasks.map((task) => (
        <Task key={task.id} task={task} />
        ))}
    </>
  )
}

Tasks.defaultProps = {
    text: PropTypes.string,
}

export default Tasks;
