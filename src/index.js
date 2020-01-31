
// * When a user clicks on the add new toy button, a `POST` request is sent to 
// `http://localhost:3000/toys` and the new toy is added to Andy's Toy Collection.
// * The toy should conditionally render to the page.



let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  renderAllToys()
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })
  
})

// as a user we need to see a full list of toys
// when the page load we want to make a get fetch and render toy cards to the DOM

function renderAllToys(){
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(toyArray => {
    toyArray.forEach(toy => {
      
      buildToyCard(toy)})
    })
  }
  
  function buildToyCard(toy){
    const toyCollection = document.getElementById('toy-collection')
    const toyCard= document.createElement('div')
    toyCard.className = "card"
    
    toyCollection.appendChild(toyCard)
    
    const toyName = document.createElement('h2')
    toyName.className = "toy-name"
    toyName.innerText = toy.name
    toyCard.appendChild(toyName)
    
    const toyImg = document.createElement('img')
    toyImg.className = "toy-avatar"
    toyImg.src = toy.image
    toyCard.appendChild(toyImg)
    
    const likeBtn = document.createElement('button')
    likeBtn.innerHTML = "Like"
    toyCard.appendChild(likeBtn)
    
    // When a user clicks on a toy's like button, two things should happen:
    //   * Conditional increase to the toy's like count
    //   * A patch request sent to the server at `http://localhost:3000/toys/:id` 
    // * updating the number of likes that the specific toy has
    
    
    
    
  }
  




