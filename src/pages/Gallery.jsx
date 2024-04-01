import "./../assets/syle.css";



const Gallery = () => {
  // Sample image data
  const images = [
    { id: 1, src: '/img/image1.jpg', size: 'small' },
    { id: 2, src: '/img/image2.jpg', size: 'large' },
    { id: 3, src: '/img/image3.jpg', size: 'large' },
    { id: 4, src: '/img/image4.jpg', size: 'small' },
    { id: 1, src: '/img/image5.jpg', size: 'small' },
    { id: 2, src: '/img/image6.jpg', size: 'large' },
  ];

  return (
    <div className="gallery-container">
      <h1 className="text-2xl font-bold mb-4">My Gallery</h1>
      <div className="images-container">
        {images.map(image => (
          <div key={image.id} className={`image-card ${image.size}`}>
            <img src={image.src} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
