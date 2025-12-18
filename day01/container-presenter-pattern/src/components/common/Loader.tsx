const Loader = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-bold text-xl">Loading. Please wait !!!</h2>

      <div className="h-10 w-10 rounded-full border-4 border-red-700 border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loader;
