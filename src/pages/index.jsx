import { render } from '@czechitas/render';
import '../global.css';
import './index.css';


// const odpoved = await fetch('http://localhost:4000/api/ukoly', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     text: 'Vyvenčit psa',
//     urgentni: true
//   })
// })



// const odpoved = await fetch('http://localhost:4000/api/ukoly/1', {
//   method: 'DELETE',
// })

// smažu co tam už je



// const odpoved = await fetch('http://localhost:4000/api/ukoly/3', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     text: 'Dát si pauzu',
//     urgentni: true
//   })
// })

//změním jeden konkrétní záznam (číslo na konci url)

// const teloOdpovedi = await odpoved.json()
// console.log(teloOdpovedi.result)



// const odpoved = await fetch('http://localhost:4000/api/ukoly', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     text: 'Dát si pauzu',
//     urgentni: true
//   })
// })


// const jsonOdpoved = await odpoved.json()

// const ukoly = jsonOdpoved.result

// console.log(ukoly)





// document.querySelector('#root').innerHTML = render(
//   <div className="container">
//     <header>
//       <div className="logo"></div>
//       <h1>Webová aplikace</h1>
//     </header>
//     <main>
//       <ul>
//       {ukoly.map((ukol) => {
//         const { id, text} = ukol

//         return <li key="{id}">{text}</li>
//       })}
//       </ul>
//       <form id='formular'>
//         <div>
//           <label htmlFor="">
//             text úkolu
//             <input type="text" name="" id="" />
//           </label>
//         </div>
//       </form>
//     </main>
//     <footer>
//       <p>Czechitas, Digitální akademie: Web</p>
//     </footer>
//   </div>
// );

// const formular = document.querySelector('#formular')

// formular.addEventListener('submit', async (event) => {
//   event.preventDefault()


// })

const odpoved = await fetch('http://localhost:4000/api/ukoly', {
  method: 'GET',
});

const jsonOdpoved = await odpoved.json();
const ukoly = jsonOdpoved.result;

console.log(ukoly);

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
            </div>
            )
        })}
      </div>
      {/* <form id="formular">
        <div>
          <label>
            Text úkolu
            <input type="text" id="textUkolu" />
          </label>
        </div>
        <div>
          <button type="submit">Přidat</button>
        </div>
      </form> */}
    </main>
  </div>,
);

// const formular = document.querySelector('#formular');

// formular.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const textUkoluInput = document.querySelector('#textUkolu');

//   const textUkolu = textUkoluInput.value;

//   await fetch('http://localhost:4000/api/ukoly', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       text: textUkolu,
//       urgentni: false,
//     }),
//   });

//   window.location.reload();
// });
