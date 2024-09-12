import { useState } from 'react';
import slidesData from './assets/data/pageData';
import { getImageUrl } from './utils/image-utils';
import OrganDropdown from './components/DropDown';
import SlideItem from './components/SlideItem';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiLineVertical } from "react-icons/pi";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlineComputer } from "react-icons/md";

interface SlideData {
  id: number;
  title: string;
  description: string;
  organ: string;
  originalImage: string;
  modifiedImage: string;
}

function App() {
  const [isClicked, setIsClicked] = useState<number | boolean>(false);
  const [selectedOrgan, setSelectedOrgan] = useState('');

  const organs = Array.from(new Set(slidesData.map(slide => slide.organ)));

  const filteredSlides = slidesData.filter(slide =>
    (selectedOrgan ? slide.organ === selectedOrgan : true)
  );

  const toggleImage = (id: number) => {
    setIsClicked(id);
  };
  
  const resetImage = () => {
    setIsClicked(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-4xl font-serif font-bold">Visualização de Lâminas - Histologia UFAL</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-4">
        <section className="container px-2">
          <h2 className="text-2xl font-medium font-sans mb-4">Bem-vindo ao sistema de visualização de lâminas</h2>
          <div className="flex flex-col md:flex-row items-start justify-between mb-6 space-y-4 md:space-y-0 sm:items-start sm:justify-start">
            <OrganDropdown
              selectedOrgan={selectedOrgan}
              setSelectedOrgan={setSelectedOrgan}
              organs={organs}
            />
          </div>

          {/* Instruções */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5">
                <MdOutlineComputer className="text-xl"/>
              </div>
              <p className="font-light">No computador, passe o cursor do mouse por cima da imagem.</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5">
                <SlScreenSmartphone className="text-xl"/>
              </div>
              <p className="font-light">No celular, clique na imagem.</p>
            </div>
          </div>

          {/* Slide Items */}
          <div className="flex flex-wrap gap-6">
            <ul className="flex flex-row flex-wrap gap-6 w-full pb-3">
              {filteredSlides.map((slide: SlideData) => (
                <SlideItem
                  key={slide.id}
                  slide={slide}
                  isClicked={isClicked}
                  toggleImage={toggleImage}
                  resetImage={resetImage}
                  getImageUrl={getImageUrl}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="flex justify-center items-center space-x-1.5">
            <p>Pedro De Lucca</p>
            <a href="https://www.linkedin.com/in/pedro-de-lucca-s-c-ferro-316252238/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/DeLucca990" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl" />
            </a>
          </div>
          <div>
            <PiLineVertical />
          </div>
          <div className="flex justify-center items-center space-x-1.5">
            <p>Maria Clara Leão</p>
            <a href="https://www.linkedin.com/in/maria-clara-le%C3%A3o-de-andrade-4279552b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl"/>
            </a>
          </div>
          <div>
            <PiLineVertical/>
          </div>
          <div className="flex justify-center items-center space-x-1.5">
            <p>Gentileza Neiva</p>
            <a href="http://lattes.cnpq.br/4265209092783508" target="_blank" rel="noopener noreferrer">
              <HiOutlineAcademicCap  className="text-2xl"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;