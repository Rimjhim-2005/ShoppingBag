const CircularProgressBar = ({
  progress = 0,
  size = 30,
  strokeWidth = 5,
  circleColor = "#878787",
  progressColor = "#f6777e",
}) => {
  // Prevent issues with negative values or values over 100
  const cleanProgress = Math.min(Math.max(progress, 0), 100);

  // Math definitions for the SVG circle geometry
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  // Calculate how much stroke to offset based on percentage
  const strokeDashoffset =
    circumference - (cleanProgress / 100) * circumference;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Background Track Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated Progress Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s ease-in-out" }}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
