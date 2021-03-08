import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "searchItem" ]

  connect() {
    console.log("Hello world")
  }

  requestSearch() {
    const resultsArea = document.querySelector('.search-results')
    if(this.searchItemTarget.value.length > 0) {
      resultsArea.classList.add("showing")
      fetch('/pages/query.html?search='+ this.searchItemTarget.value)
      .then(response=> {
        return response.text();
      })
      .then(html=> {
        resultsArea.innerHTML=html;
      });
    } else {
      resultsArea.classList.remove("showing")
    }
    //console.log(this.searchItemTarget.value)
  }
}