class Student {
  
    getInfo (){
        const newLine = '\n'
        console.log(
            
           'Name: '+ this.name + newLine +
           "Adress: "+ this.adress + newLine +
            "Phone "+ this.phone + newLine +
            "Course "+this.course + newLine 

        )
    }
    constructor(name, adress, phone, course){
        this.name = name
        this.adress= adress
        this.phone = phone
        this.course = course


    }
}

const Andrei = new Student('Andrei', "Turnului, 5", '0755449955', 'math')
const JohnBenson = new Student('John Benson', 'High Park 36', '(507) 833-3567', 'Geography')
const Hubert = new Student ('Hubert B Yanez', '4927 Ash Avenue','314-865-8222',"Phisics")




JohnBenson.getInfo()
Andrei.getInfo()
Hubert.getInfo()