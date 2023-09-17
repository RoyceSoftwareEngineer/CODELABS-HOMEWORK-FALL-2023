//builder pattern demo \\
class Calculator {
    constructor(props){
        this.result = 0;
    }
    add(num){
        this.result+=nim;
        return this;
    }
    subtract(num){
        this.result-=num;
        return this;
    }
    multiply(num) {
        this.result *= num;
        return this;
    }
    divide(num){
        this.result /= num;
    }
    compute(){
        return this.result;
    }
}
//usage
let calculator= new Calculator();
let calculator2= new Calculator();

let expression1 = calculator.add(5).subtract(1).multiply(2).divide(2);
let expresssion2 = calculator2.add(1).subtract(4).multiply(2).divide(8);

console.groupCollapsed('Builder Pattern');
console.log('reslt 1:', expression1.result);
console.log('result 2:', expression2.result);
console.groupEnd();

//builder pattern demo \\
// usefule to 
//conceal or protect a larger piece of logic under a single function
class CPU{
    freeze(){
        //code to begin proteccting here
    }
    jump(position){
        //code to start at again
    }
    execute(){
        //code to run here
    }
}
class HardDrive{
    read(lba, size){
        //code here
    }
}
class ComputerFacade{
    constructor(){
        this.processor = new CPU();
        this.ram = new memeory();
        this.hd = new HardDrive();
    }
    start(){
        this.processor.freeze();
        console.log('Processor freeze Success');
        this.ram.load(this. BOOT_ADDRESS, this.hd.read(this.BOOT_SECTIOR, this.SECTOR_SIZE));
        console.log('Ram Load Success');
        this.processor.jump(this.BOOT>ADDRESS);
        //......
        this.processor.execute();
        console.log('Processor Execute Success');

    }
}

//Usage:
console.groupCollapsed('Facade Pattern');
let computer = new ComputerFacade();
computer.start();
console.groupEnd();


//Composite Pattern start\\
//this pattern is where objects are composed of multiple parts to create a single entity
// that in turn, becomes the access point for all the parts
class Employee{
    constructor(name, position){
        this.name=name;
        this.position=position;
    }
}
// leaf subclass
class FreelanceDesigner extends Employee{
    constructor(name, position){
        super(name, position);
    }
}

// leaf subclass
class SoftwareDeveloper extends Employee{
    constructor(name, position){
        super(name, position);
    }
}
//Composite Subclass
class DevTeamLead extends Employee{
    constructor(name, position){
        super(name, position);
        this.teammemebers= [];
    }
    addMember(employee){
        this.teammemebers.push(employee);
    }
    viewTeam(){
        let employeeNames = this.teammemebers.map((member) =>member.name);
        return employeeNames;
    }
    //....
}

//Usage:
const seniorDev = new SoftwareDeveloper('Royce', 'Senior Developer');
const companyDesigner = new FreelanceDesigner('Joey', 'Web Developer');
const teamLead = new DevTeamLead ('Racehl', 'Dev Team Lead');

teamLead.addMember(senior.Dev);
teamLead.addMemeber(compnayDesigner);

console.groupCollapsed('Composites Pattern');
console.log('Team memebers list', teamLead.viewTeam());
console.groupEnd();

