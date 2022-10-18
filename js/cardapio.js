const controlesP = document.querySelectorAll(".controle-pizza");
let escolhidoPizza = 0;
const pizzas = document.querySelectorAll(".escolhido-pizza");
const maxPizzas = pizzas.length;

controlesP.forEach((controleP) => { 
  controleP.addEventListener("click", (e) => {
    
    isLeft = e.target.classList.contains("seta-esquerda-pizza"); 

    if (isLeft) {
      escolhidoPizza -= 1;
    } else {
      escolhidoPizza += 1;
    }

    if (escolhidoPizza >= maxPizzas) {
      escolhidoPizza = 0;
    }

    if (escolhidoPizza < 0) {
      escolhidoPizza = maxPizzas - 1;
    }


    pizzas.forEach((pizza) => pizza.classList.remove("escolhido-pizza"));

    pizzas[escolhidoPizza].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    pizzas[escolhidoPizza].classList.add("escolhido-pizza");
  });
});

const controlesB = document.querySelectorAll(".controle-drink");
let escolhidoDrink = 0;
const bebidas = document.querySelectorAll(".escolhido-drink");
const maxBebidas = bebidas.length;

controlesB.forEach((controleB) => {
  controleB.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("seta-esquerda-drink");

    if (isLeft) {
      escolhidoDrink -= 1;
    } else {
      escolhidoDrink += 1;
    }

    if (escolhidoDrink >= maxBebidas) {
      escolhidoDrink = 0;
    }

    if (escolhidoDrink < 0) {
      escolhidoDrink = maxBebidas - 1;
    }

    bebidas.forEach((bebida) => bebida.classList.remove("escolhido-drink"));

    bebidas[escolhidoDrink].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    bebidas[escolhidoDrink].classList.add("escolhido-drink");
  });
});