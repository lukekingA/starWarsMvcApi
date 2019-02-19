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
  <div class="d-flex justify-content-between"><div>
  <button class="btn btn-light text-dark"  onclick="window.app.controllers.swController.getPeople('${_swService.Previous}')" ${_swService.Previous ? '' : 'disabled'}>Previous</button>
  <button class="btn btn-light text-dark" onclick="window.app.controllers.swController.getPeople('${_swService.Next}')" ${_swService.Next ? '' : 'disabled'}>Next</button>
   </div>
  <h4 class="text-light">People</h4>
  </div>
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