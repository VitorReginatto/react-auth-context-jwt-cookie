import { LoaderCircle } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen dark:bg-gray-900 dark:text-white flex items-center justify-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default LoadingSpinner;