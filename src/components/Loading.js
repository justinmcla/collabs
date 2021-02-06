import React from "react";
import { ReactComponent as LoadingSpinner } from '../assets/LoadingSpinner.svg'

const Loading = () => (
  <div className="h-screen w-screen flex justify-center items-center bg-gray-200 dark:bg-gray-800">
    <LoadingSpinner />
  </div>
);

export default Loading;