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
  handleOpenDrawer: () => void;
}

const SlideItem: React.FC<SlideItemProps> = ({ slide, isClicked, toggleImage, resetImage, getImageUrl, handleOpenDrawer }) => {
  return (
    <li className="bg-white rounded-lg shadow-md p-4 pt-1 flex-1 min-w-[300px] max-w-[400px] list-none">
      <div className="group relative">
        <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
        <div className="relative">
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
      </div>
      <div className="flex items-center justify-between mt-4 mb-2">
        <button
          onClick={handleOpenDrawer}
          className="px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <p className="text-base">Ver detalhes</p>
        </button>
        <button
          onClick={resetImage}
          className="ml-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <p className="text-base">Imagem original</p>
        </button>
      </div>
      <p className="text-neutral-950">
        <span className="font-bold underline">Orgão pertencente:</span> {slide.organ}
      </p>
      <p className="text-neutral-950 line-clamp-2 overflow-hidden text-ellipsis">
        <span className="font-bold underline">Descrição:</span> {slide.description}
      </p>
    </li>
  );
};

export default SlideItem;
