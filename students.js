const fs = require('fs')

//////////////////   Add student   /////////////////////////////////
const addStudent = (id , name, grade, comment) =>{
    const studentsData = loadStudents()

    const duplicateID = studentsData.filter((studentData) =>{
        return studentData.id === id
    })

    if(duplicateID.length === 0){
        studentsData.push({
        id:id,
        name:name,
        grade:grade,
        comment:comment

    })
    saveStudent(studentsData)
    }
    else{
        console.log('Error Duplicate title')
    }
}

///////////////////////    Delete Student  /////////////////////////////////

const removeStudent = (id) =>{
    const studentsData = loadStudents()
    const studentsToKeep = studentsData.filter((studentData)=>{
    return studentData.id !== id
    })
    saveStudent(studentsToKeep)
    console.log(studentsToKeep)
}

////////////////////    Read student data  ////////////////////////////////

const readStudentData = (id) =>{
    const studentsData = loadStudents()
    const studentData = studentsData.find((studentData)=>{
        return studentData.id === id
    })

    if(studentData){
        console.log(studentData)
        console.log(studentData.id)
        console.log(studentData.name)
        console.log(studentData.grade)
        console.log(studentData.comment)
    }
}

////////////////////    List data  ////////////////////////////////

const listData = () =>{
    const studentsData = loadStudents()
    studentsData.forEach((studentData) =>{return console.log(studentData)})
}

//////////////////   functions Declaration   /////////////////////
const loadStudents = ()=>{
    try{
        const dataBuffer = fs.readFileSync('studentsData.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}
/////////////
const saveStudent = (studentsData)=>{
    const saveData = JSON.stringify(studentsData)
    fs.writeFileSync('studentsData.json',saveData)
}

//////////////////////   End  ///////////////////////

module.exports ={
    addS:addStudent,
    deleteS:removeStudent,
    readS:readStudentData,
    listS:listData
}