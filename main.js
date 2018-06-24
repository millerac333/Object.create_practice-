////PRACTICE////
// const Lowes = Object.create({}, {
//     business: {
//         value: "Lowes Home Improvement"
//     },
//     employmentStart: {
//         value: "09-01-06"
//     },
//     employmentEnd: {
//         value: "06-01-2009"
//     },
//     position: {
//         value: "Customer Service Associate"
//     }

// })

// const MCVhospital = Object.create({}, {
//     business: {
//         value: "MCV Hospital"
//     },
//     employmentStart: {
//         value: "06-01-10"
//     },
//     employmentEnd: {
//         value: "08-01-2014"
//     },
//     position: {
//         enumerable: true,
//         writable: true,
//         value: "CNA"
//     }
// })

// const Hiller = Object.create({}, {
//     business: {
//         value: "Hiller Plumbing, Heating, Cooling, and Electrical"
//      },
//     employmentStart: {
//         value: "09-01-2014"
//      },
//     employmentEnd: {
//         value: "06-01-2017"
//      },
//     position: {
//         value: "Plumbing Technician"
//      }  
// })

// const Uber = Object.create({}, {
//     business: {
//         value: "Uber Rideshare"
//     },
//     employmentStart: {
//         value: "09-01-2014"
//     },
//     employmentEnd: {
//         enumerable: true,
//         writable: true,
//         value: "currently employed"
//     },
//     position: {
//         value: "Driver"
//     }
// })

//---------------------------------------------------------------------//

//CHALLENGE//
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
    return jobsProtoype;
};

var Hiller = Jobs("Hiller", "1/1/2014", "1/1/2017", "Plumbing Technician");


console.log(Hiller);



