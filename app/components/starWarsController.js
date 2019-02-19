import StarWarsService from './starWarsService.js'


//private

let _swService = new StarWarsService()



function drawPeople() {
  let people = _swService.People
  let template = ''
  people.forEach(person => {
    template += person.Template
  })
  document.getElementById('people').innerHTML = template
  document.getElementById('buttons').innerHTML = `
  <button onclick="window.app.controllers.swController.getPeople('${_swService.Previous}')" ${_swService.Previous ? '' : 'disabled'}>Previous</button>
  <button onclick="window.app.controllers.swController.getPeople('${_swService.Next}')" ${_swService.Next ? '' : 'disabled'}>Next</button>
  `
  console.log(_swService.Next)
}

function drawPerson() {
  document.getElementById('person').innerHTML = _swService.ActivePerson.DetailTemplate

}

//public
export default class StarWarsController {
  constructor() {
    //subscribers
    _swService.addSubscriber('people', drawPeople)
    _swService.addSubscriber('activePerson', drawPerson)

    // _swService.getAllApiPeople()
  }

  getPeople(url) {
    _swService.getAllApiPeople(url)
  }

  getPerson(url) {
    _swService.getOneApiPerson(url)

  }
}