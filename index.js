const user= {
    name: "Elnur",
    height: 179,
    phone:{
        model:"Iphone",
    },
    orders:["book","mouse","mousepad"]
}
 user.height++; //user.height+=1;
 console.log(user.height);

 user.phone.model="Samsung";
 console.log(user.phone.model);

 user.phone.seriya="s22"; //same object
 console.log(user);

 delete user.name;
 console.log(user);

 user.orders.shift();
 console.log(user.orders);

 user.orders.pop();
 console.log(user.orders);
  
user.orders.unshift("ball");
console.log(user.orders);

user.orders.push("headphones");
console.log(user.orders);