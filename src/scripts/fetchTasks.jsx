export const fetchTasks = () => {
  fetch("http://localhost:3001/api/tasks")
    .then(response => response.json())
    .then(response => {
      return response;
    });
};

// componentDidMount() {
//   fetch("https://api.imgflip.com/get_memes")
//     .then(response => response.json())
//     .then(response => {
//       const { memes } = response.data;
//       this.setState({ allMemeImages: memes });
//     });
// }
