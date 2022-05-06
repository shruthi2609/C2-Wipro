let studentOne={
    fname:"john",
    reg:1,
    nocomp:3,
    comp:["xyz","abc","wipro"],
    displayName:function(){
        console.log(`Name : ${this.fname}`)
    },
    displayReg:function(){
        console.log(`reg : ${this.reg}`)
    }
}
let studentTwo={
    fname:"peter",
    reg:2,
    nocomp:2,
    comp:["xyz","abc"],
}
let placementData={
    nocomp:"",
    comp:[],
    displayCompanies:function(){
        console.log(`you are placed in ${this.nocomp} ${this.comp}`)
    }
}
const displayTwo=studentOne.displayName.bind(studentTwo)
const dispReg=studentOne.displayReg.bind(studentTwo)
const john=placementData.displayCompanies.bind(studentOne)
const peter=placementData.displayCompanies.bind(studentTwo)
john()
peter()

