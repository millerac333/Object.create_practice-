# PRACTICE
## Book 2 Chapter 10: Object.create() in Javascript



Use Object.create() to define objects for every place that you've worked before NSS.

For example:
```
const ChickFilA = Object.create({}, {
    business: {
        value: "Chick-Fil-A"
    },
    employmentStart: {
        value: "01-01-2009"
    },
    employmentEnd: {
        value: "01-01-2010"
    }
})
```

You add as many properties as you want for each job.

Things you liked about the job
Things you hated about the job
etc...

---------------------------------------------------------------------------------

### CHALLENGE
Write a function that will build, and return, a job object. Make sure you define an argument for each one of the properties you want to be in the object.

```
const JobMaker = (a,r,g,u,m,e,n,t,s) {
    return theObjectYouBuilt
}
```
---------------------------------------------------------------------------------

### ADVANCED CHALLENGE
Put each of your jobs into an array.

Iterate over the array, and use document.createElement() to build an <article> element representing each job. The id property of the element should be the name of the business.


## Run Program 
1. open in editor 
2. launch in browser 
3. view console in developer tools 
    
   
