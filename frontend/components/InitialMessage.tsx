const InitialMessage = () => {
  return (
    <div className="text-white flex flex-col justify-center">
      <p className="text-sky-300">
        Welcome! Please upload a CSV file containing user data.
      </p>
      <h3 className="my-5 text-center font-bold">Warning:</h3>
      <ul className="flex flex-col gap-5 text-red-300">
        <li>⚠️ This application only accepts CSV files.</li>
        <li>
          ⚠️ Your file should include the following fields: name, city, country,
          and favorite sport.
        </li>
        <li>⚠️ You cannot upload duplicated users.</li>
      </ul>
    </div>
  );
};

export default InitialMessage;
