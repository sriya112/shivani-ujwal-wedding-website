export default function Gallery() {
  return (
    <div className="gallery">
      {[1,2,3,4,5,6].map(i => (
        <img
          key={i}
          src={`https://picsum.photos/400/300?random=${i}`}
          alt="Wedding moment"
        />
      ))}
    </div>
  );
}
