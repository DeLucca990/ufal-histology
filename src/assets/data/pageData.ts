interface SlideData {
    id: number;
    title: string;
    description: string;
    organ: string;
    originalImage: string;
    modifiedImage: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    title: "Lâmina 1",
    description: "Descrição da lâmina 1: Lorem ipsum odor amet, consectetuer adipiscing elit...",
    organ: "Glândula Sebácea",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
  {
    id: 2,
    title: "Lâmina 2",
    description: "Descrição da lâmina 2: Netus massa elementum ullamcorper ad ex egestas...",
    organ: "Glândula Sebácea",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
  {
    id: 3,
    title: "Lâmina 3",
    description: "Descrição da lâmina 3: Netus massa elementum ullamcorper ad ex egestas...",
    organ: "Glândula Sebácea",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
  {
    id: 4,
    title: "Lâmina 4",
    description: "Descrição da lâmina 4: Netus massa elementum ullamcorper ad ex egestas...",
    organ: "Glândula Sebácea",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
];

export default slidesData;