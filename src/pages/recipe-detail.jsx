import { render } from '@czechitas/render';
import { RecipeDetail} from '../components/RecipeDetail';
import '../global.css';
import './index.css';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const answer = await fetch(`http://localhost:4000/api/recipes/${id}`, {
  method: 'GET',
});

const bodyOfResult = await answer.json()
console.log(bodyOfResult)
console.log(bodyOfResult.result)

const recipe = bodyOfResult.result

console.log(recipe);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1 className='heading__primary'>Recept</h1>
    </header>
    <main>

    <RecipeDetail key={recipe.id} img={recipe.img} name={recipe.name} ingredient1={recipe.ingredient1} ingredient2={recipe.ingredient2} ingredient3={recipe.ingredient3} ingredient4={recipe.ingredient4} ingredient5={recipe.ingredient5} process={recipe.process} />

    </main>
  </div>,
);

const onClick = async (event) => {
    const answer = await fetch (`http://localhost:4000/api/recipes/${id}`, {
    method: 'DELETE',
    })

    const bodyAnswer = await answer.json()

    window.location='/'
}

document.querySelector('#delete-button').addEventListener('click', onClick)