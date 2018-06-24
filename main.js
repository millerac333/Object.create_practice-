//PRACTICE////
let lowes = Object.create({}, {
    business: {
        value: "Lowes Home Improvement"
    },
    employmentStart: {
        value: "09-01-06"
    },
    employmentEnd: {
        value: "06-01-2009"
    },
    position: {
        value: "Customer Service Associate"
    }

})

let MCVhospital = Object.create({}, {
    business: {
        value: "MCV Hospital"
    },
    employmentStart: {
        value: "06-01-10"
    },
    employmentEnd: {
        value: "08-01-2014"
    },
    position: {
        enumerable: true,
        writable: true,
        value: "CNA"
    }
})

let Hiller = Object.create({}, {
    business: {
        value: "Hiller Plumbing, Heating, Cooling, and Electrical"
     },
    employmentStart: {
        value: "09-01-2014"
     },
    employmentEnd: {
        value: "06-01-2017"
     },
    position: {
        value: "Plumbing Technician"
     }  
})

let Uber = Object.create({}, {
    business: {
        value: "Uber Rideshare"
    },
    employmentStart: {
        value: "09-01-2014"
    },
    employmentEnd: {
        enumerable: true,
        writable: true,
        value: "currently employed"
    },
    position: {
        value: "Driver"
    }
})

//---------------------------------------------------------------------//

//CHALLENGE & ADVANCED CHALLENGE//

const jobArray = [];

function Jobs (businessName, startDate, endDate, title) {
    let jobsProtoype = Object.create({}, { 
        business: {
            value: businessName,
            enumerable: true,
            writable: true,
        },
        employmentStart: {
            value: startDate,
            enumerable: true,
            writable: true,
        },
        employmentEnd:  {
            value: endDate,
            enumerable: true,
            writable: true,   
        },
        position: {
            value: title,
            enumerable: true,
            writable: true,     
        }
    })
    return jobsProtoype,
    jobArray.push(jobsProtoype)
};

let kroger = Jobs("Kroger", "1/1/2001", "1/1/2003", "Cashier") 

jobArray.push(lowes);
jobArray.push(MCVhospital);
jobArray.push(Uber);
jobArray.push(Hiller);


console.log(kroger);
console.log(jobArray);

for (let key in jobArray) {
    
    let articleElement = document.createElement('article');
    articleElement.textContent = jobArray[key].value;
    articleElement.id = jobArray[key].value;
    document.getElementById("jobArrayDiv").appendChild(articleElement);
}







