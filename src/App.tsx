import { useState } from 'react';
import slidesData from './assets/data/pageData';
import { getImageUrl } from './utils/image-utils';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiLineVertical } from "react-icons/pi";

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

  const toggleImage = (id: number) => {
    setIsClicked(id);
  }
  const resetImage = () => {
    setIsClicked(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-4xl font-bold">Visualização de Lâminas - Histologia UFAL</h1>
      </header>

      <main className="flex-grow mt-4">
        <section className="container px-2">
          <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao sistema de visualização de lâminas</h2>
          <div className="flex items-center space-x-2 mb-2">
            <p>No computador basta passar o cursor do mouse por cima da imagem.</p>
          </div>
          <div className="flex items-center space-x-2 mb-6">
            <p>No celular basta clicar na imagem.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <ul className="flex flex-row flex-wrap gap-6 w-full pb-3">
              {slidesData.map((slide: SlideData) => (
                <li
                  key={slide.id}
                  className="bg-white rounded-lg shadow-md p-4 flex-1 min-w-[300px] max-w-[400px] list-none "
                >
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
              ))}
            </ul>
          </div>
        </section>
      </main>

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