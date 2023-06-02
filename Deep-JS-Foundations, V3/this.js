const pet = {
    name: "Nemo",
    type: "fish",
    age: 2,
};

Object.prototype.sayHello = function(){
    console.log(`${this.name} is ${this.type} and is ${this.age} years old. ${this.name} says hi!`);
}

pet.sayHello();

// = = = = = = = = = = 

const pet2 = {
    name: "Alex",
    type: "lion",
    age: 4,
};

pet2.sayHello();

// = = = = = = = = = = 

const book = {
    name: "Harry Potter",
    author: "J.K. Rowling",
    characters: {
        mainChars: ["Harry", "Ron", "Hermione"],
        list: function(){
            for(const char of this.mainChars){
                console.log(char)
            }
        }
    }
}

book.characters.list();

// = = = = = = = = = = 

const book2 = {
    characters: {
        mainChars: ["Drace", "Severus", "Voldemort"],
    },
};

book.characters.list.call(book2.characters);
book.characters.list.apply({
        mainChars: ["Saidali", "Zikirillaev", "Ibn Zafar"],
    });
    
    
const boundListFunction = book.characters.list.bind({
    mainChars: ["Draco", "Severus", "Voldemort"],
});

boundListFunction();

book.characters.list();

book.characters.list = book.characters.list.bind({
    mainChars: ["Draco", "Severus", "Voldemort"],
});

book.characters.list();

// = = = = = = = = = = 

function Person(name, age, favouriteFood){
    this.name = name;
    this.age = age;
    this.favouriteFood = favouriteFood;
}

Person.prototype.greet = function(){
    console.log(`${this.name} says hello!`);
}

const avery = Person("Avery", 20, "Dark Chocolate");
const jackie = new Person("Jeckie", 35, "Sourdough Bread");

console.log(avery);
console.log(jackie);

console.log(jackie.__proto__.constructor.name);
console.log(jackie.__proto__.__proto__.constructor.name);
console.log(jackie.__proto__.__proto__.__proto__);

console.log(Object.getOwnPropertyNames(jackie));
console.log(Object.getOwnPropertyNames(Person));

// = = = = = = = = = = 

function ThisPerson(name, age, favouriteFood){
    this.name = name;
    this.age = age;
    this.favouriteFood = favouriteFood;
}

function ProtoPerson(name, age, favouriteFood){
    return { // short-hand property initialization:
        name,
        age,
        favouriteFood,
    };
}

const thisPerson = new ThisPerson("This", 0, "cookies");
const protoPerson = ProtoPerson("Proto", 1, "?");

console.log(thisPerson.name);
console.log(protoPerson.name);



