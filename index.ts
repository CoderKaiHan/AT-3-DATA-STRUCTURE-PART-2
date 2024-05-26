//part 1

// Array
const timbuktuArray: number[] = [16.7666, -3.0026];

// Tuple
const timbuktuTuple: [number, number] = [16.7666, -3.0026];

// Enum
enum TimbuktuEnum {
    Latitude = 16.7666,
    Longitude = -3.0026
}

// Object
const timbuktuObject: {
    lat: number,
    long: number
} = {
    lat: 16.7666,
    long: -3.0026
}

// Interface
interface Coordinates1 {
    lat: number,
    long: number
}

const timbuktuCoordinates1: Coordinates1 = {
    lat: 16.7666,
    long: -3.0026
}

// Alias
type Coordinates2 = {
    lat: number,
    long: number
}

const timbuktuCoordinates2: Coordinates2 = {
    lat: 16.7666,
    long: -3.0026
}




//part 2
enum Days {
    Monday = 1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  }
  
  function myDay(scheduled: Days): void {
    scheduled <= 5 ? console.log("weekday") : console.log("weekend")
  }
  
  myDay(Days.Saturday);
  
  
  
  // Same functionality using a switch statement and higher order function.
  function myDay1(day: string): string {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (days.includes(day)) {
      return day
    } else {
      return 'Error'
    }
  }
  
  // higher order function, takes function as an argument
  function myDay2(myDay1: string): void {
    switch (myDay1) {
      case 'Saturday':
        console.log("weekend")
        break
      case 'Sunday':
        console.log("weekend")
        break
      case 'Error':
        throw Error(`did not enter a day of the week`)
      default:
        console.log("weekday")
    }
  }
  
  myDay2(myDay1('Monday'))
  

//part3
//Direct object

const USA :{
    name:string,
    population:number,
    capital:string
} = {
    name:"United States of America",
    population:336673595,
    capital:"Washington,D.C."
}

const Taiwan :{
    name:string,
    population:number,
    capital:string
} = {
    name:"Republic of China(Taiwan)",
    population:23947630,
    capital:"Taipei"
}


//Bonus
class User {
    username: string;
  
    constructor(username: string) {
      this.username = username;
    }
  
    readContent(): void {
      console.log(`${this.username} is reading content.`);
    }
  }
  
  class Admin extends User {
  
    constructor(username: string) {
      super(username);
    }
  
    editContent(): void {
      console.log(`${this.username} is editing content.`);
    }
  }
  
  // Create instances of User and Admin
  const user1 = new User('regularUser');
  const admin1 = new Admin('adminUser');
  
  // Demonstrate functionality
  user1.readContent(); 
  admin1.readContent(); 
  admin1.editContent();
  
