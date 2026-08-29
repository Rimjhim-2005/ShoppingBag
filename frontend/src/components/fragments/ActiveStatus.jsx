const ActiveStatus = (status) => {
  console.log(status);
  return (
    <div className="flex flex-row p-2 border-1 rounded-lg  text-sm m-auto">
      {status.status == "active" ? (
        <div className="w-3 h-3 rounded-full bg-accent-500 mr-2 border"></div>
      ) : (
        <span className="material-symbols-outlined">check_circle</span>
      )}
      <span>{status.status}</span>
    </div>
  );
};

export default ActiveStatus;
