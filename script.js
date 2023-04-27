const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]


  const article2 = document.createElement("article");
   console.log(article2);


  const novoelement1 = document.querySelector("main");
  novoelement1.appendChild(article2);
 
  const addid1 = article2.setAttribute("id", "post-2");
   console.log(addid1)

 console.log(arrayPostagens[1].titulo);
  article2.innerHTML = `
  <h3>${arrayPostagens[1].titulo}</h3>
  <p class="">${arrayPostagens[1].subtitulo}</p>
  <div class="data">${arrayPostagens[1].data}</div>
  <p>${arrayPostagens[1].texto}</p>`


  const article3 = document.createElement("article");
   console.log(article3)

  const novoelement2 = document.querySelector("main");
   novoelement2.appendChild(article3)

 const addid2 = article3.setAttribute("id", "post-3");
  console.log(addid2)

  console.log(arrayPostagens[2].titulo);
  article3.innerHTML = `
  <h3>${arrayPostagens[2].titulo}</h3>
  <p class="">${arrayPostagens[2].subtitulo}</p>
  <div class="data">${arrayPostagens[2].data}</div>
  <p>${arrayPostagens[2].texto}</p>`



   
   
   





