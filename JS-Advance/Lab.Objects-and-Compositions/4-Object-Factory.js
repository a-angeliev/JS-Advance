const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
function factory(library, orders){
    for(let el of orders){
        //el.name = el.template.name
        for (let prop in el.template) {
            if (el.template.hasOwnProperty(prop)) {
                el[prop] = el.template[prop];
            }
        }
        // el.template
        delete el.template
        for(let part of el.parts){
            el[`${part}`] = library[`${part}`];
            console.log([library[`${part}`]]);
        }
        // console.log(el);
        delete el.parts
        // console.log(el.parts);
    }
    // console.log(orders);
    return orders
}
const products = factory(library, orders);
let [first, secound,trhd,forth] = products
first.print()
forth.play("trac1", "artist1")
console.log(typeof first.print);
console.log(trhd);
console.log(products);
    