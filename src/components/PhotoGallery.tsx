import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/badhair.jpg',
  '/biker.jpg',
  '/bikerboy.jpg',
  '/broadband.jpg',
  '/burnel.jpg',
  '/chest.png',
  '/diver.jpg',
  '/firstresponder.jpg',
  '/gday.jpg',
  '/gday2.jpg',
  '/globe.jpg',
  '/Icon_Bird_512x512.jpg',
  '/labada.jpg',
  '/oldglobe.jpg',
  '/pandemic.jpg',
  '/pawis.jpg',
  '/pic.png',
  '/suit.jpg',
  '/usar.jpg',
  '/vas.jpg',
];

const PhotoGallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-2xl font-semibold mb-8">Photo Gallery</h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PhotoGallery;