const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-dark-950">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-dark-700 border-t-primary-500 animate-spin" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
