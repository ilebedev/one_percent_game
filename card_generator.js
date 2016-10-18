Vue.component('generated-card', {
  props: ['card'],
  template: '<div class="card" :class="card.type"><div class="type"><span>{{ card.type }}</span></div><div class="cost"><span>{{ card.cost }}</span></div><div class="flavor_text"><span>{{ card.flavor_text }}</span></div><div class="action_text"><span>{{ card.action_text }}</span></div></div>'
})

var app = new Vue({
  el: '#app',
  data: {
    cards: [
      { type: 'L', cost: 12, flavor_text: "Posh Jewelery Shop", action_text: "Produce 6 at each beginning of your turn." },
      { type: 'S', cost: 12, flavor_text: "Posh Jewelery Shop", action_text: "Produce 6 at each beginning of your turn." },
      { type: 'M', cost: 12, flavor_text: "Posh Jewelery Shop", action_text: "Produce 6 at each beginning of your turn." },
      { type: 'F', cost: 12, flavor_text: "Posh Jewelery Shop", action_text: "Produce 6 at each beginning of your turn." },
      { type: 'R', cost: 12, flavor_text: "Posh Jewelery Shop", action_text: "Produce 6 at each beginning of your turn." }
    ]
  }
})
