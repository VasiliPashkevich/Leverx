class User{
    constructor(name, lastName, dateOfBirth){
      let _name = name;
      let _lastName = lastName;
      let _dateOfBirth = dateOfBirth;
  
      this.getName = function(){
        return _name;
      }
  
      this.getLastName = function(){
        return _lastName;
      }
  
      this.getDateOfBirth = function(){
        return _dateOfBirth;
      }
    }  
  }
  
  class Worker extends User{
    constructor(name, lastName, dateOfBirth, place){
      super(name, lastName, dateOfBirth)
  
        let _place = place;
  
      this.getPlace = function(){
        return _place;
      }
    }
  }
  
  var roman = new User("Roman", "Panasik", "07.05.1996");
  var anatoli = new Worker("Anatoli", "Petrov", "13.11.1992", "Minsk");
  
  console.log(roman.getName());
  console.log(anatoli.getPlace());
  console.log(anatoli.getName());
  
  var data = [roman.getName(), anatoli.getPlace(), anatoli.getName()];
  
  
  const express = require('express')
  const app = express()
   
  app.get('/', function (req, res) {
    res.send(data.join(' '));
  })
   
  app.listen(3000);