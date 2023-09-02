
export const replaceProdFromCart=(products,carts)=>{

    products=products.map((el)=>{
       const data= carts.find((cart)=>cart?.id==el?.id);
      return data?data:el;
    })
    return products
}

export const calculateTotalPrice=(data)=>{
    let price=0;
    data.forEach((el)=>{
        console.log(el.quantity)
        price+=(Number(el.price)*el.quantity);
    })
    return price.toFixed(2);
}