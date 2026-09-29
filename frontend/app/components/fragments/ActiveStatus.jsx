const ActiveStatus = (status) => {
  return (
    <div className="flex flex-row border-1 rounded-full text-sm py-2 px-3  text-sm m-auto justify-center items-center">
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
