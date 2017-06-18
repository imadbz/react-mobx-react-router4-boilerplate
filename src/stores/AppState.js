import { observable, action } from "mobx" 
import axios from "axios" 

export default class AppState {
  
  constructor() {
  }

  // @action async fetchData(pathname, id) {
  //   let { data } = await axios.get(
  //     `https://jsonplaceholder.typicode.com${pathname}`
  //   ) 
  //   console.log(data) 
  //   data.length > 0 ? this.setData(data) : this.setSingle(data) 
  // }

}
