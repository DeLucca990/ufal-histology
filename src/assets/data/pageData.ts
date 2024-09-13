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
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit...",
    organ: "Orgão 1",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
  {
    id: 2,
    title: "Lâmina 2",
    description: "Netus massa elementum ullamcorper ad ex egestas...",
    organ: "Orgão 2",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
  {
    id: 3,
    title: "Lâmina 3",
    description: "Netus massa elementum ullamcorper ad ex egestas...",
    organ: "Orgão 3",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
  {
    id: 4,
    title: "Lâmina 4",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vel luctus condimentum congue ipsum risus nascetur rhoncus. Euismod fusce dictum porttitor massa magna elit duis nam est. Quis et himenaeos consectetur sociosqu; vel mauris rutrum. Aliquam enim neque maximus taciti venenatis felis rhoncus. Massa praesent placerat, molestie tristique ipsum montes sodales.",
    organ: "Orgão 4",
    originalImage: 'glandula-sebacea',
    modifiedImage: 'glandula-sebacea-mod'
  },
];

export default slidesData;