class Car
{
    constructor(yearOfProduction, brand, model, mileage, fuelConsumption, registrationNumber, fuelPrice)
    {
        this.yearOfProduction = yearOfProduction,
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.fuelConsumption = parseInt(fuelConsumption);
        this.registrationNumber = registrationNumber
        this.fuelPrice = parseInt(fuelPrice)
    }

    displayInfo() {
        document.body.innerHTML = this.brand + ' ' + this.model + ' ' + this.yearOfProduction;
    }

    detail() {
        document.body.innerHTML = this.registrationNumber + ' ' + this.brand;
    }

    priceForHundredKM() {
        var price = (this.fuelConsumption * this.fuelPrice);
        document.body.innerHTML = 'Price for 100 km: ' + price.toFixed(2);
    }

}

var dreamCar = new Car("2050", "Samsung", "IphoneM12", "10cm", 15, "registration", 7 )

class Book
{
    constructor(title, author, publicationDate, numberOfPages, publishingHouse, registrationNumber, language, isAvaliable, extraInfo)
    {
        this.title = title,
        this.author = author;
        this.publicationDate = publicationDate;
        this.numberOfPages = parseInt(numberOfPages);
        this.publishingHouse = publishingHouse;
        this.registrationNumber = registrationNumber
        this.language = language
        this.isAvaliable = isAvaliable
        this.extraInfo = extraInfo
    }
    numberofOpinions = 0;
    opinions = []

    bookDescription()
    {
        document.body.innerHTML = this.author + " " + this.title + " " + this.publicationDate + " " + this.numberOfPages;
    }

    addOpinon()
    {
        this.opinion[this.numberofOpinions] = parseFloat(prompt("podaj opinie"));
        this.numberofOpinions += 1;
        this.gradeAverage();
    }

    gradeAverage()
    {
        var gradesTotal = 0;
        for(var i = 0; i < this.numberofOpinions; i++)
        {
            gradesTotal += parseFloat(this.opinions[i])
        }
        var gradeAverage = gradesTotal/ parseFloat(this.numberofOpinions);
        document.body.innerHTML = "Średnaia = " + gradeAverage.toFixed(2);
    }

    checkAvailabile()
    {
        if(this.isAvaliable == true)
            document.body.innerHTML = "dostępna";
        else
            document.body.innerHTML = "NIE dostępna";
        
    }

}

var exampleBook = new Book("Przeklęta truskawa", "Carl B", "2022-01-01", 2137, "Bielinny Times", "ABC123", "Bieliński", true, "extra informacje");

class Dinosaur{
constructor(species, length, weight, characteristics, periodOfLife, isPredator, color, occurrence, isExisting )
{
    this.species = species
    this.length = length
    this.weight = weight
    this.characteristics = characteristics || []
    this.periodOfLife = periodOfLife
    this.isPredator = isPredator
    this.color = color
    this.occurrence = occurrence || []
    this.isExisting = isExisting
}

bark()
{
    document.body.innerHTML = "miau";
}

dinoDescription()
{
    var predator
    if(this.isPredator)
    {
        predator = "draieżnik"
    }
    else
    {
        predator = "nie drapieżnik"
    }
    
    var existing
    if(this.isExisting)
         existing = "nadal występuje🗿"
     else
        existing = "już nieżyje"


    document.body.innerHTML = this.species + " " +
    this.length + " metrów " + 
    this.weight + " kg " + 
    this.characteristics.join(', ') +" " +
    this.periodOfLife + " " + 
    predator + " " + 
    this.color + " " +
    this.occurrence.join(', ') + " " +
    existing;
}

countDangerousity()
{
    dangerousMeater = 0;
    if(this.isPredator)
        dangerousMeater += 35;
    if(this.length > 5 && this.length < 10)
        dangerousMeater += 10;
    if(this.weight > 5 && this.weight < 9)
        dangerousMeater += 15;
    if(this.characteristics.includes("horn"))
    dangerousMeater += 10;
    if(this.characteristics.includes("Sharp Teeth"))
    dangerousMeater += 10;
    if(this.characteristics.includes("claws"))
    dangerousMeater += 10;

    if(dangerousMeater < 50)
    document.body.innerHTML = "łagodny"
    if(dangerousMeater >= 50 && dangerousMeater < 70)
    document.body.innerHTML = "niebezpieczny"
    if(dangerousMeater >= 70 && dangerousMeater < 90)
    document.body.innerHTML = "bardzo zły gad"
    if(dangerousMeater > 90)
    document.body.innerHTML = "turby dinozaurł zł"
}
}

var tRex = new Dinosaur(
    "Tyrannosaurus Rex",
    12,
    9000,
    ["Sharp Teeth", "Short Arms"],
    "Late Cretaceous",
    true,
    "Gray",
    ["North America"],
    true)