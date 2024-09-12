import React from 'react';

interface SlideData {
  id: number;
  title: string;
  description: string;
  organ: string;
  originalImage: string;
  modifiedImage: string;
}

interface SlideItemProps {
  slide: SlideData;
  isClicked: number | boolean;
  toggleImage: (id: number) => void;
  resetImage: () => void;
  getImageUrl: (imageName: string, isModified: boolean) => string;
}

const SlideItem: React.FC<SlideItemProps> = ({ slide, isClicked, toggleImage, resetImage, getImageUrl }) => {
  return (
    <li className="bg-white rounded-lg shadow-md p-4 flex-1 min-w-[300px] max-w-[400px] list-none">
      <div className="group relative">
        <img
          src={getImageUrl(slide.originalImage, false)}
          alt={slide.title}
          className={`rounded-md mb-2 transition-opacity duration-300 cursor-pointer ${
            isClicked === slide.id ? 'opacity-0' : 'opacity-100'
          } group-hover:opacity-0`}
          onClick={() => toggleImage(slide.id)}
        />
        <img
          src={getImageUrl(slide.modifiedImage, true)}
          alt={`${slide.title} Hover`}
          className={`rounded-md mb-2 absolute top-0 left-0 transition-opacity duration-300 cursor-pointer ${
            isClicked === slide.id ? 'opacity-100' : 'opacity-0'
          } group-hover:opacity-100`}
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <h3 className="text-xl font-bold">{slide.title}</h3>
        <button
          onClick={resetImage}
          className="ml-4 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Voltar à imagem original
        </button>
      </div>
      <p className="text-neutral-950">
        <span className="font-bold underline">Orgão pertencente:</span> {slide.organ}
      </p>
      <p className="text-gray-600">{slide.description}</p>
    </li>
  );
};

export default SlideItem;
