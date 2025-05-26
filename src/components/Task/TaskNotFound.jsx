
const TaskNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg shadow-md">
            <svg
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Task Not Found</h2>
            <p className="text-gray-500">We couldn't find the task you're looking for.</p>
        </div>
    );
};

export default TaskNotFound;