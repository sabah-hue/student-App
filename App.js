const yargs = require('yargs')
const { demandCommand, demandOption } = require('yargs')
const students = require('./students')

///////////////////  Add  Student  ///////////////////////
yargs.command({
    command:'add',
    describe:'Add Student',
    builder:{
        id:{
            describe:'this is student ID',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'this is student Name',
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'this is student Grade',
            demandOption:true,
            type:'number'
        },
        comment:{
            describe:'this is student comment',
            type:'string'
        }
    },
    handler:(argv)=>{
        students.addS(argv.id,argv.name,argv.grade,argv.comment);
    }
})

/////////////////////// Delete Student ////////////////////////

yargs.command({
    command:'delete',
    describe:'Delete students',
    builder:{
        id:{
            describe:'this is student ID',
            demandOption:true,
            type:'number'
        }
    },
    
    handler:(argv)=>{
        students.deleteS(argv.id);
    }
})

/////////////////////// Read Student Data  ////////////////////////

yargs.command({
    command:'read',
    describe:'Read Student Data',
    builder:{
        id:{
            describe:'this is student ID',
            demandOption:true,
            type:'number'        }
    },
    handler:(argv)=>{
        students.readS(argv.id)
    }
})

/////////////////////// List Data  ////////////////////////

yargs.command({
    command:'list',
    describe:'List Data',
    handler:(argv)=>{
        students.listS();
    }
})

yargs.parse()