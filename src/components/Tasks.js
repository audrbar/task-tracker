import PropTypes from 'prop-types';

const tasks = [
    {
        id: 1,
        text: 'Doctors appointment',
        day: '2023-02-29',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Scholl',
        day: '2023-04-15',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: '2023-03-07',
        reminder: false,
    },
]

const Tasks = () => {
  return (
    <>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

Tasks.defaultProps = {
    text: PropTypes.string,
}

export default Tasks;
