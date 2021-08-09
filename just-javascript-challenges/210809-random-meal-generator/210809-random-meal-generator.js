let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;

  },
  set appetizers(appetizerIn) {
    this._course.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;

  },
  set mains(mainsIn) {
    this._course.mains = mains;

  },
  get desserts() {
    return this._courses.desserts;

  },
  set desserts(dessertsIn) {
    this._course.desserts = desserts;

  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish =  {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + mains.price + desserts.price

    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name} The price is $${totalPrice}.`
  },
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Wings', 5.25);
menu.addDishToCourse('appetizers', 'Meat Balls', 7.25);

menu.addDishToCourse('mains', 'Fried Rice', 9.25);
menu.addDishToCourse('mains', 'Sushi', 12.25);
menu.addDishToCourse('mains', 'Steak', 15.25);

menu.addDishToCourse('desserts', 'Ice cream', 4.25);
menu.addDishToCourse('desserts', 'Black forrest', 3.25);
menu.addDishToCourse('desserts', 'Candy', 5.25);

let meal = menu.generateRandomMeal();
console.log(meal);
