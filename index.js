/* Your Code Here */

function createEmployeeRecord([strFirst, strLast, strTitle, payRate]) {
   return {
      firstName: strFirst,
      familyName: strLast,
      title: strTitle,
      payPerHour: payRate,
      timeInEvents: [],
      timeOutEvents: [],
   }
}

function createEmployeeRecords(arrofArr) {
   let employeeRecords = []
   for (arr of arrofArr) {
      let result = createEmployeeRecord(arr)
      employeeRecords.push(result)
   }
   return employeeRecords
}

function createTimeInEvent(timeString) {
   return {
      type: "TimeIn",
      hour: timeString.slice(11),
      date: timeString.slice(0, 10),
   }
}

console.log(createTimeInEvent("2014-03-28 1030"))

function createTimeOutEvent(timeString) {}

let nestedArr = [
   ["james", "plurp", "song man", 2],
   ["wanda", "sanz", "genius", 100],
]

console.log(createEmployeeRecords(nestedArr))

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
   let eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
   })

   let payable = eligibleDates.reduce(
      function (memo, d) {
         return memo + wagesEarnedOnDate.call(this, d)
      }.bind(this),
      0
   ) // <== Hm, why did we need to add bind() there? We'll discuss soon!

   return payable
}
