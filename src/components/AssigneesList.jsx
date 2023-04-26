const AssigneesList = ({ list }) => {
  return (
    <div className='flex flex-row-reverse mr-4'>
      {list.map((a) => (
        <div key={a.id} className='group inline-block -mr-2 rounded-full'>
          <img
            className='group-hover:translate-x-2 duration-100 w-9 h-9 rounded-full border-2 border-slate-100 object-cover rotateY'
            src={
              a.imgUrl ||
              `https://eu.ui-avatars.com/api/?name=${a.firstName}+${a.lastName}&size=80`
            }
            alt={a.firstName + " " + a.lastName}
            title={a.firstName + " " + a.lastName}
          />
        </div>
      ))}
    </div>
  );
};

export default AssigneesList;
