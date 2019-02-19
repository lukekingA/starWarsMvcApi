export default class Person {
  constructor(data) {
    this.name = data.name
    this.gender = data.gender
    this.hair_color = data.hair_color
    this.eye_color = data.eye_color
    this.url = data.url
    this.films = data.films.length || data.films
  }

  get Template() {
    return `<li onclick="window.app.controllers.swController.getPerson('${this.url}')" class="${this.gender}">${this.name} </li>`
  }

  get DetailTemplate() {
    return `
  <ul>
  <li>${this.name}</li>
  <li>Is: ${this.gender} gender</li>
  <li>Has: ${this.hair_color} hair</li>
  <li>Has: ${this.eye_color} eyes</li>
  <li>Has been in ${this.films} of the Star Wars films</li>
</ul>`
  }
}