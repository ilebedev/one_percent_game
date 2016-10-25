
var deck = [
  { type: 'S', cost: 3, flavor_text: "Industrial Meth Lab", action_text: "8" },
  { type: 'S', cost: 3, flavor_text: "Dubious Finances", action_text: "8" },
  { type: 'S', cost: 4, flavor_text: "A Drug Empire", action_text: "12" },
  { type: 'S', cost: 4, flavor_text: "Arms Dealer Contract", action_text: "12" },
  { type: 'M', cost: 6, flavor_text: "Glass Factory", action_text: "3" },
  { type: 'M', cost: 6, flavor_text: "Distillery", action_text: "3" },
  { type: 'M', cost: 6, flavor_text: "Boat Yard", action_text: "3" },
  { type: 'M', cost: 6, flavor_text: "Machine Shop", action_text: "3" },
  { type: 'M', cost: 6, flavor_text: "Lumber Mill", action_text: "3" },
  { type: 'M', cost: 8, flavor_text: "CPU Manufacturer", action_text: "4" },
  { type: 'M', cost: 8, flavor_text: "Car Manufacturer", action_text: "4" },
  { type: 'M', cost: 8, flavor_text: "Textile Factory", action_text: "4" },
  { type: 'M', cost: 8, flavor_text: "Paper Mill", action_text: "4" },
  { type: 'M', cost: 8, flavor_text: "Book Publisher", action_text: "4" },
  { type: 'M', cost: 10, flavor_text: "Computer Company", action_text: "5" },
  { type: 'M', cost: 10, flavor_text: "Automobile Factory", action_text: "5" },
  { type: 'M', cost: 10, flavor_text: "Nuclear Power Plant", action_text: "5" },
  { type: 'M', cost: 10, flavor_text: "Airplane Factory", action_text: "5" },
  { type: 'M', cost: 10, flavor_text: "Semiconductor Fab", action_text: "5" },
  { type: 'F', cost: 1, flavor_text: "Sandwich Shop", action_text: "1" },
  { type: 'F', cost: 1, flavor_text: "Salad Bar", action_text: "1" },
  { type: 'F', cost: 2, flavor_text: "Ice Cream Shop", action_text: "1" },
  { type: 'F', cost: 2, flavor_text: "Specialty Cheese Shop", action_text: "1" },
  { type: 'F', cost: 2, flavor_text: "Cookie Store", action_text: "1" },
  { type: 'F', cost: 2, flavor_text: "Free-Range Poultry", action_text: "1" },
  { type: 'F', cost: 4, flavor_text: "Butcher", action_text: "2" },
  { type: 'F', cost: 4, flavor_text: "Bakery", action_text: "2" },
  { type: 'F', cost: 4, flavor_text: "Chinese Food", action_text: "2" },
  { type: 'F', cost: 4, flavor_text: "Corner Store", action_text: "2" },
  { type: 'F', cost: 6, flavor_text: "Grocery Store", action_text: "3" },
  { type: 'F', cost: 6, flavor_text: "Megamart", action_text: "3" },
  { type: 'L', cost: 8, flavor_text: "Midnight Cakes", action_text: "6" },
  { type: 'L', cost: 8, flavor_text: "Eight-Twelve", action_text: "6" },
  { type: 'L', cost: 10, flavor_text: "Tennessee Fried Turkey", action_text: "7" },
  { type: 'L', cost: 10, flavor_text: "Burger Lord", action_text: "7" },
  { type: 'L', cost: 12, flavor_text: "McHungry's", action_text: "9" },
  { type: 'L', cost: 12, flavor_text: "Wandas", action_text: "9" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Everyone pays an amount of money equal to the poorest player's wealth" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Poorest two players shuffle production cards back into the deck" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Shuffle all active production cards back into deck" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Richest two players after this law is passed must redistribute their wealth to all players evenly" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Richest player after this law is passed must redistribute their wealth to all players evenly" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Discard production cards that generate an income > $10" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Discard all Sketchy production cards" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "All players pay tax equal to the number of types of industries they own" },
  { type: 'R', cost: 5, flavor_text: "End all taxes!", action_text: "Taxation is now 0 per turn!" },
  { type: 'R', cost: 5, flavor_text: "Progressive taxation!", action_text: "Increase taxation by 1 per player's production card." },
  { type: 'R', cost: 5, flavor_text: "Progressive taxation!", action_text: "Increase taxation by 1 per player's production card." },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Tax = 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Tax = 3" },
  { type: 'R', cost: 5, flavor_text: "Reduce taxes!", action_text: "Reduce taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Reduce taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Reduce taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Reduce taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Reduce taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Reduce taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Increase taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Increase taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Increase taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Increase taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Increase taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Increase taxation by 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Production cards that earn < $3 now earn $3" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "Production cards that earn > $10 now earn $10" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Luxury) - 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Luxury) - 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Luxury) + 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Luxury) + 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Sketchy) - 3" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Sketchy) - 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Sketchy) - 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Sketchy) - 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Sketchy) - 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Manufacturing) - 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Manufacturing) - 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Manufacturing) + 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Manufacturing) + 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Food) - 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Food) - 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Food) + 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "income(Food) + 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "cost(Food) - 2" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "cost(Food) - 1, cost(All other industries) + 1" },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "It costs at least 20% of your wealth to propose or remove a regulation." },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "It costs at least 10% of your wealth to propose or remove a regulation." },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "It costs at least 3 to propose or remove a regulation." },
  { type: 'R', cost: 5, flavor_text: "Regulation!", action_text: "It costs at least 2  to propose or remove a regulation." },
  { type: '', cost: '', flavor_text: "Default Rules", action_text: "Draw 1, Play infinite.\nPlayers start with 10 wealth.\nIt costs at least 5 to propose or remove a regulation.\nTax=0."}
]



Vue.component('generated-card', {
  props: ['card'],
  template: '<span style="padding-left:5px;"><div class="card" :class="card.type"><div class="type"><span>{{ card.type }}</span></div><div class="cost"><span>{{ card.cost }}</span></div><div class="flavor_text"><span>{{ card.flavor_text }}</span></div><div class="action_text"><span>{{ card.action_text }}</span></div></div></span>'
})

var app = new Vue({
  el: '#app',
  data: {
    cards: deck
  }
})

// TODO: maybe make a CSV parser for this....

/* Production cards
// Organize in a google doc as into TYPE COST FLAVOR ACTION columns
// Usign the corrent columns, the regex is:
// REGEX: ([LSMFR])[a-z]*\s+([0-9]+)\s+([0-9]+)\s+\"([^\"]*)\"\s+\"([^\"]*)\"
// Substitute with { type: '$1', cost: $2, flavor_text: "$3", action_text: "$4" },
*/
