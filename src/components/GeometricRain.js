import "../styles/georain.css";

export default function GeometricRain({
  count = 140,
  colours = ["#ffffff", "#aee2ff", "#ffc8dd", "#caffbf"],
  shapes = ["square", "triangle", "pentagon", "hexagon"]
}) {
  const items = Array.from({ length: count }).map(() => {
    const type = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 14 + 8;
    const color = colours[Math.floor(Math.random() * colours.length)];

    return {
      type,
      left: Math.random() * 100,
      translateX: Math.random() * 20 - 10,
      size,
      color,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
      rotate: Math.random() * 360
    };
  });

  return (
    <div className="rain-container">
      {items.map((s, i) => (
        <div
          key={i}
          className={`shape ${s.type}`}
          style={{
            left: `${s.left}%`,
            "--triangle-size": `${s.size}px`,
            "--color": s.color,
            width: s.type !== "triangle" ? `${s.size}px` : undefined,
            height: s.type !== "triangle" ? `${s.size}px` : undefined,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            transform: `translateX(${s.translateX}px) rotate(${s.rotate}deg)`
          }}
        />
      ))}
    </div>
  );
}
