import { render } from '@czechitas/render';
import { RecipeCard } from '../components/RecipeCard';
import '../global.css';
import './index.css';



const answer = await fetch('http://localhost:4000/api/recipes', {
  method: 'GET',
});

const bodyOfResult = await answer.json()
console.log(bodyOfResult)
console.log(bodyOfResult.result)

const recipes = bodyOfResult.result

console.log(recipes);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1 className='heading__primary'>Recepty</h1>
    </header>
    <main>

      <div className='grid'>
        {recipes.map((recipe) => {
          const { id, img, name } = recipe

          return <RecipeCard key={id} id={recipe.id} img={recipe.img} name={recipe.name} />

        })}
      </div>
      
      <br />

      <form id="form">
      <div>
          <label>
              URL obrázku
            <input type="text" id="img" />
          </label>
        </div>
        <div>
          <label>
              Název receptu
            <input type="text" id="name" />
          </label>
        </div>
        <div>
          <label>
              Ingredience
            <input type="text" id="ingr1" />
          </label>
        </div>
        <div>
          <label>
              Ingredience
            <input type="text" id="ingr2" />
          </label>
        </div>
        <div>
          <label>
              Ingredience
            <input type="text" id="ingr3" />
          </label>
        </div>
        <div>
          <label>
              Ingredience
            <input type="text" id="ingr4" />
          </label>
        </div>
        <div>
          <label>
              Ingredience
            <input type="text" id="ingr5" />
          </label>
        </div>
        <div>
          <label>
              Postup
            <textarea id="process" name="process" cols="30" rows="10"></textarea>
          </label>
        </div>
       
        <div>
          <button className='button' type='submit'>Přidat recept</button>
        </div>
      </form>

    </main>
  </div>,
);

const formular = document.querySelector('#form');

formular.addEventListener('submit', async (event) => {
  event.preventDefault();

  const img = document.querySelector('#img')
  const name = document.querySelector('#name');
  const ingr1 = document.querySelector('#ingr1')
  const ingr2 = document.querySelector('#ingr2')
  const ingr3 = document.querySelector('#ingr3')
  const ingr4 = document.querySelector('#ingr4')
  const ingr5 = document.querySelector('#ingr5')
  const process = document.querySelector('#process')

  await fetch('http://localhost:4000/api/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: img.value,
      name: name.value,
      ingr1: ingr1.value,
      ingr2: ingr2.value,
      ingr3: ingr3.value,
      ingr4: ingr4.value,
      ingr5: ingr5.value,
      process: process.value
    }),
  });

  window.location.reload();
});