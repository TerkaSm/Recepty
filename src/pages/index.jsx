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

      <form action="">
        <label>
            text receptu
          <input type="text" id="textRecipe" />
        </label>
        <div>
          <button className='button' type='submit'>Přidat recept</button>
        </div>
      </form>
      
    </main>
  </div>,
);
