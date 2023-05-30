// Code your solution in this file!
const returnFirstTwoDrivers = (driver) => driver.slice(0,2) 

const  returnLastTwoDrivers = (driver) => driver.slice (2,4)

const  selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(n){
    return function () {
    return n*n
   }
}
const fareDoubler = (fare) => fare*2
const  fareTripler = (fare) => fare * 3


const selectDifferentDrivers = (selectingDrivers, array2) => array2(selectingDrivers)