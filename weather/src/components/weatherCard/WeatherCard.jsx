export default function WeatherCard({heading, para}) {
  return (
    <>
      <div
        className="weather-card"
        style={{
          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "150px",
          padding: "10px",
          background: "white"
        }}
      >
        <h3 style={{ marginBottom: "0" }}>{heading}</h3>
        <p>{para}</p>
      </div>
    </>
  );
}
