const Alert = ({ message }) => {
  return (
    <div className="fixed left-0 z-50 flex items-center justify-center w-full bottom-20">
      <div className="flex items-center justify-center w-1/3 h-10 font-bold text-white rounded-full bg-slate-600">
        {message}
      </div>
    </div>
  );
};

export default Alert;
