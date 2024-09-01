// Result Component to display API data
export const Result = ({ data, error, loading }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h3>API Result:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
