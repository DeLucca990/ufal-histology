import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineAcademicCap } from "react-icons/hi";

import OriginalImage from './assets/img/original/glandula-sebacea.jpeg';
import ModifiedImage from './assets/img/modified/glandula-sebacea-mod.jpeg';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleImage = () => {
    setIsClicked(!isClicked);
  }
  const resetImage = () => {
    setIsClicked(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-4xl font-bold">Visualização de Lâminas - Histologia UFAL</h1>
      </header>

      <main className="flex-grow mt-8">
        <section className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao sistema de visualização de lâminas</h2>
          <p className="mb-2">Explore as lâminas de histologia com facilidade. Selecione uma lâmina para começar.</p>
          <p className="mb-6">Caso esteja no celular clique na lâmina, se estiver no desktop ou notebook passe o cursor do mouse por cima</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="group relative">
                <img
                  src={OriginalImage}
                  alt="Lâmina 1"
                  className={`rounded-md mb-2 transition-opacity duration-300 cursor-pointer ${isClicked ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`}
                  onClick={toggleImage}
                />
                <img
                  src={ModifiedImage}
                  alt="Lâmina 1 Hover"
                  className={`rounded-md mb-2 absolute top-0 left-0 transition-opacity duration-300 cursor-pointer ${isClicked ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-xl font-bold">Lâmina 1</h3>
                </div>
                <button
                  onClick={resetImage}
                  className="ml-4 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Voltar à imagem original
                </button>
              </div>
              <p className="text-gray-600">Descrição da lâmina 1.</p>
            </div>
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
            <p>|</p>
          </div>
          <div className="flex justify-center items-center space-x-1.5">
            <p>Maria Clara Leão</p>
            <a href="https://www.linkedin.com/in/maria-clara-le%C3%A3o-de-andrade-4279552b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl"/>
            </a>
          </div>
          <div>
            <p>|</p>
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