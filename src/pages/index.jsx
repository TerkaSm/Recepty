import { render } from '@czechitas/render';
import '../global.css';
import './index.css';



const odpoved = await fetch('http://localhost:4000/api/recepty', {
  method: 'GET',
});

const teloOdpovedi = await odpoved.json()
console.log(teloOdpovedi)
console.log(teloOdpovedi.result)

const recepty = teloOdpovedi.result

console.log(recepty);



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1>Recepty</h1>
    </header>
    <main>
      <div className='grid'>
        {recepty.map((recept) => {
          const { id, nazev } = recept;

            return (
            <div className='recept' key={id}>
              <figcaption className='recept__fig'>
                <img className='recept__img' src="{img}" alt="{nazev}" />
              </figcaption>
              <p className='recept__nazev'>{nazev}</p>
              <a className='recept__link' href="#">Více</a>
            </div>
            )
        })}
      </div>
    </main>
  </div>,
);
