
const AssigneesList = ({ list }) => {
  return (
    <div className='flex mr-2'>
      {list.map((a) => (
        <div key={a.id} className='group inline-block -mr-2 rounded-full'>
          <img
            className='group-hover:-translate-x-2 duration-100 w-10 rounded-full shadow-md'
            src={`https://eu.ui-avatars.com/api/?name=${a.firstName}+${a.lastName}&size=80`}
            alt={a.firstName + " " + a.lastName}
            title={a.firstName + " " + a.lastName}
          />
        </div>
      ))}
    </div>
  );
};

export default AssigneesList;
