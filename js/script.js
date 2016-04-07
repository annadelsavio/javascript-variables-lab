$(function() {
  //The code goes in here. Follow the directions below.

  // 1) Create a variable containing a first name
  // 2) Create a variable containing a last name
  // 3) Create a variable that combines the first and last name called fullName
  // 4) Create a variable with your year of graduation
  // 5) Create a variable with the current year
  // 6) Create a variable called yearsUntilGraduation with the difference between the two years
  // 7) Create a variable called greaterThanMedian that returns a boolean value for whether the new school median
  //     is greater than the NYC median income
  // 8) Create a variable called medianDifference that subtracts new school median income from nyc
  // 9) Check out your mad libs in the browser!
  // 10) Change some of the variables, reload your index page, and watch the information change


  var newSchoolMedian = 39400;
  var nycMedian = 49461;


  // All of your code needs to go above this!
  $("#full-name").text(fullName);
  $("#years-until-graduation").text(yearsUntilGraduation);
  $("#median").text(newSchoolMedian);
  $("#ny-median").text(nycMedian);
  $("#median-difference").text(medianDifference);
  $("#median-boolean").text(greaterThanMedian);
});
