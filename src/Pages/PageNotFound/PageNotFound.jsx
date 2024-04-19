

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
          <div className="flex justify-center items-center">
            <span className="text-6xl text-red-600 font-bold mr-4">404</span>
            <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
          </div>
          <p className="text-gray-600 mt-4">
            Sorry, the page you are looking for could not be found.
          </p>
          <button
            className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
};

export default PageNotFound;