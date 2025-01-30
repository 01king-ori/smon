const PolicyLayout = ({ children, title }) => {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-center text-primary border-b border-secondary pb-4 mb-8">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default PolicyLayout;