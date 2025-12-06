
import axios from 'axios'
const API_KEY = 'AIzaSyC7YdHnfxIJCif25qSiA7MeRiuRXXnV6ko';

export const queryBooks = async () => {
  try {
    let q = "flowers";
    const res = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q='+q+'&key='+API_KEY)
    console.log(res.data.items);

  } catch (error) {
    console.log(error);
  }
};