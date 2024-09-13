import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

interface OrganDropdownProps {
  selectedOrgan: string;
  setSelectedOrgan: (organ: string) => void;
  organs: string[];
}

const OrganDropdown: React.FC<OrganDropdownProps> = ({ selectedOrgan, setSelectedOrgan, organs }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [organSearchTerm, setOrganSearchTerm] = useState('');

  const filteredOrgans = organs.filter(organ =>
    organ
      .toLowerCase()
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, '') 
      .includes(
        organSearchTerm
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') 
      )
  );
  
  return (
    <div className="relative w-full max-w-xs">
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="p-2 border border-gray-300 rounded-2xl shadow-sm w-full text-left flex-1 pr-10"
        >
          {selectedOrgan ? selectedOrgan : 'Selecione um órgão'}
        </button>
        <button
          onClick={() => {
            if (selectedOrgan) {
              setSelectedOrgan('');
              setOrganSearchTerm('');
              setDropdownOpen(false);
            } else {
              setDropdownOpen(!dropdownOpen);
            }
          }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          {selectedOrgan ? <IoClose className="text-xl hover:text-red-500" /> : <FaChevronDown className="text-xl" />}
        </button>
      </div>

      {dropdownOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-2xl shadow-lg z-10">
          <input
            type="text"
            placeholder="Pesquisar órgão..."
            value={organSearchTerm}
            onChange={(e) => setOrganSearchTerm(e.target.value)}
            className="p-2 border-b border-gray-200 rounded-t-2xl w-full"
          />

          <ul className="max-h-48 overflow-y-auto no-scrollbar rounded-b-2xl">
            <li
              className="p-2 hover:bg-gray-100 cursor-pointer underline"
              onClick={() => {
                setSelectedOrgan('');
                setDropdownOpen(false);
              }}
            >
              Todos os órgãos
            </li>
            {filteredOrgans.map((organ, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedOrgan(organ);
                  setDropdownOpen(false);
                }}
              >
                {organ}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrganDropdown;
