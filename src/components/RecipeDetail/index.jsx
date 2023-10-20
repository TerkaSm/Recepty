import './style.css';

export const RecipeDetail = ({ id, img, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, process }) => (
    <div className='RecipeDetail' key={id}>
        <div className='RecipeDetail__flex'>
          <figcaption className='RecipeDetail__'>
            <img className='RecipeDetail__' src={img} alt={name} />
          </figcaption>
          <div className='RecipeDetail__'>
            <h1 className='RecipeDetail__'>{name}</h1>
            <h2 className='RecipeDetail__'>Seznam surovin</h2>
            <ul className='RecipeDetail__'>
              <li className='RecipeDetail__'>{ingredient1}</li>
              <li className='RecipeDetail__'>{ingredient2}</li>
              <li className='RecipeDetail__'>{ingredient3}</li>
              <li className='RecipeDetail__'>{ingredient4}</li>
              <li className='RecipeDetail__'>{ingredient5}</li>
            </ul>
          </div>
        </div>
        <p className='RecipeDetail__'>{process}</p>
        <a className='button' href="index.html">Zpět</a>
    </div>
)