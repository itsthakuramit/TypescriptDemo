class Animal{

    move(): void{
        console.log('Animals can walk, run');
    }
}


class Dog extends Animal{

    bark(): void{
        console.log('Dog barks, sometimes it bite')
    }
}

let dog: Dog = new Dog();

dog.move();
dog.bark();