/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Additional - Simple Functions', () => {

    it('01) This function can add two numbers.', function(){
        let result = sum(99, 1);
        result.should.be.equal(100);
    });
    
    it('02) This function can substract two numbers.', () => {
        let result = substract(-5, 5);
        result.should.be.equal(-10);
    });
    
    it('03) This function finds the longest edge of a triangle.', () => {
        let result = calculateHypotenuse(5, 12);
        result.should.be.equal(13);
    });
    
    it('04) This function returns the reverse order of a string.', () => {
        let result = reverse("hata var");
        result.should.be.equal("rav atah");
    });    
    
    it('05) This function returns the current date with the following format "dd/mm/yyyy"', () => {
        let result = getCurrentDate(new Date(1923, 10-1, 29));
        result.should.be.equal("29/10/1923");
    });  
    
    it('07) Write a function that calculates the area of a rectangle.', () => {
        let result = rectngleArea(5, 5);
        result.should.be.equal(25);
    });
    
    it('08) Write a function that returns the area of a circle.', () => {
        let result = circleArea(5);
        result.should.be.equal(79);
    });
    
    it('09) Write a function that returns the name of the given month.', () => {
        let result = getMonthName(new Date(2017, 3, 4));
        result.should.be.equal("Nisan");
    });
    
    it('10) Write a function that returns the horoscope of the given date.', () => {
        let result = getHoroscope(new Date(2017, 5-1, 25));
        result.should.be.equal("Ikizler");
    });
    
    it('11) Write a function that calculates factorial of a number.', () => {
        let result = findFactorial(6);
        result.should.be.equal(720);
    });    
    
    it('12) Write a function that capitalize a string.', () => {
        let result = capitalize("hallo");
        result.should.be.equal("Hallo");
    });
    
    it('13) Write a function that finds the social level by salary.', () => {
        let result = findSocialLevel(30000);
        result.should.be.equal("POOR");
    });
    
    it('14) Write a function that finds the even numbers to the given number starting from one.', () => {
        let result = findEvenNumbersTo(21);
        result.should.be.deepEqual([2,4,6,8,10,12,14,16,18,20]);
    });
    
    it('14) Write a function that finds the series of the factor of second paramters to the given number starting from one.', () => {
        let result = findTheSequenceTo(17, 3);
        result.should.be.deepEqual([3, 6, 9, 12, 15]);
    });    
    
    it('15) Write a function to concatenate two strings except their first character.', () => {
        let result = concatSpecially("KZO", "Volki");
        result.should.be.equal("ZOolki");
    });  
   
    it('16) Write a function that rearrange a string in alphatical order', () => {
        let result = orderAlphabetically("swiss");
        result.should.be.equal("ssiws");
    }); 
    
    it('17) Write a function that accepts a string and find the longest word in it', () => {
        let result = findTheLongestWord("Warum werden die Hausaufgaben nicht vor dem Deadline geliefert!");
        result.should.be.equal("Hausaufgaben");
    });  
    
    it('18) Write a function that find the number of vowels.', () => {
        let result = findNumberOfVowel("Ooo, dostlar nasilsiniz? Keyifler iyidir insaallah?");
        result.should.be.equal(19);
    });   
    
    it('19) Write a function that masks with * by the given characters.', () => {
        let result = maskTheString("Das ist eine Hausaufgabe!", ["a", "e", "i"]);
        result.should.be.equal("D*s *st **n* H*us*ufg*b*!");
    });   
    
    it('20) Write a function that sums all even numbers to the given upper limit.', () => {
        let result = sumEventNumbersTo(11);
        result.should.be.equal(30);
    });    
    
    it('21) Write a function to convert a string into camel case.', () => {
        let result = toCamelCase("hallo frontenders group");
        result.should.be.equal("halloFrontendersGroup");
    });    
 
    it('22) Implement a function that finds words in a string which includes any of the given chars.', () => {
        let result = findWordsByChars("Keep it simple stupid!", ["e"]);
        result.should.be.deepEqual(["Keep", "simple"]);
    });       
});