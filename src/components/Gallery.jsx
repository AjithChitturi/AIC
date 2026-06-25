// Gallery — dark section with a slider of campus/event photos on the live site.
export default function Gallery() {
  const slides = Array.from({ length: 4 })
  return (
    <section id="gallery" className="gallery reveal">
      <div className="container">
        <h2 className="gallery__title">Gallery</h2>
        <div className="gallery__strip">
          {slides.map((_, i) => (
            <div className="gallery__item" key={i}>
              <span>Photo {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
