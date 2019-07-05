export const getFormattedDate = d => {
  if (d === undefined) {
    d = new Date();
  } else {
    d = new Date(d);
  }
  // Dodanie 0 przed jednocyfrowym dniem
  const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  // Dodanie 0 przed jednocyfrowym miesiacem
  const m = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}.${m}.${year}`;
};

export const getFormattedTime = h => {
  if (h === undefined) {
    h = new Date();
  } else {
    h = new Date(h);
  }
  // Dodanie 0 przed jednocyfromymi godzinami
  const hours = h.getHours() < 10 ? "0" + h.getHours() : h.getHours();
  // Dodanie 0 przed jednocyfrowymi minutami
  const m = h.getMinutes() < 10 ? "0" + h.getMinutes() : h.getMinutes();
  return `${hours}:${m}`;
};
