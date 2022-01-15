function lowerPrice(arr){
    let products = {}
    for(let x of arr){
        let[town, product, price] = x.split(' | ')
        price = Number(price)
        if(!products[product]){
            products[product] = [price, town]
        }else if(products[product][0] > price){
            products[product][0] = price;
            products[product][1] = town;
        }
    }
    // products.forEach(([key,value]) => {
    //     console.log(`${key} -> ${value[0]} (${value[1]})`)
    // });

    for(const prop in products){
        console.log(`${prop} -> ${products[prop][0]} (${products[prop][1]})`)
    }

}

lowerPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)