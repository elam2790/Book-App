
import axios from 'axios'
import { Book } from './models/Book.js';

const API_KEY = 'AIzaSyC7YdHnfxIJCif25qSiA7MeRiuRXXnV6ko';
const baseURL = 'http://localhost:5000';

export const queryBooks = async () => {
  try {
    let q = "flowers";
    const res = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q='+q+'&key='+API_KEY)
    var result = res.data.items
   for(let i = 0; i < result.length-1; i++){
    const book = new Book({
      title: result[i].volumeInfo.title,
      author: result[i].volumeInfo.authors[0],
      // needs fixing
      //isbn: result[i].volumeInfo.industryIdentifiers,
      coverUrl: result[i].volumeInfo.imageLinks.thumbnail,
      description: result[i].volumeInfo.description,
      genres: result[i].volumeInfo.categories,
      publishedYear: result[i].volumeInfo.publishedDate
    });
    const response = await axios.post(`${baseURL}/api/books`, book)
    var resq = response.status;
  }
  } catch (error) {
    console.log(error);
  }
};