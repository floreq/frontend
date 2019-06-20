export const getFormattedDate = () => {
  const d = new Date();
  // Dodanie 0 przed jednocyfrowym dniem
  const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  // Dodanie 0 przed jednocyfrowym miesiacem
  const m = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}.${m}.${year}`;
};
