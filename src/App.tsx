import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-4xl font-bold">Visualização de Lâminas - Histologia UFAL</h1>
      </header>

      <main className="flex-grow mt-8">
        <section className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao sistema de visualização de lâminas</h2>
          <p className="mb-6">Explore as lâminas de histologia com facilidade. Selecione uma lâmina para começar.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="path_to_image.jpg" alt="Lâmina 1" className="rounded-md mb-2" />
              <h3 className="text-xl font-bold">Lâmina 1</h3>
              <p className="text-gray-600">Descrição da lâmina 1.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="path_to_image.jpg" alt="Lâmina 2" className="rounded-md mb-2" />
              <h3 className="text-xl font-bold">Lâmina 2</h3>
              <p className="text-gray-600">Descrição da lâmina 2.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="path_to_image.jpg" alt="Lâmina 3" className="rounded-md mb-2" />
              <h3 className="text-xl font-bold">Lâmina 3</h3>
              <p className="text-gray-600">Descrição da lâmina 3.</p>
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
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
