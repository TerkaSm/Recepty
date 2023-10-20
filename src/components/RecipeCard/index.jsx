import './style.css';

export const RecipeCard = ({ id, img, name }) => (
    <div className='RecipeCard' key={id}>
        <figcaption className='RecipeCard__fig'>
        <img className='RecipeCard__img' width='333' src={img} alt={name} />
        </figcaption>
        <p className='RecipeCard__name'>{name}</p>
        <div className='RecipeCard__buttons'>
            <a className='button button--secondary' href="#">Smazat</a>
            <a className='button' href={`recipe-detail.html?id=${id}`}>Uvařit</a>
        </div>
    </div>
)