// Instructions
// Simple, remove the spaces from the string, then return the resultant string.

// Problem given
function noSpace(x){
  
}

// Solution I wrote
function noSpace(x){
  let strArray = x.split(' ').join('')
  return strArray
}

// Alternate solution with Regex
function noSpace(x){
  return x.replace(/\s/g, '');
}

// Solution with arrow function
const noSpace = x => x.replace(/ /g, "");

// Longer solution
function noSpace(x){
  var result = ""
  for(var index = 0; index < x.length; index++){
    if(x[index] !== " "){
      result += x[index];
    }
  }
  return result;
}

// Test
Test.describe("Example tests",_=>{
  Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
  Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
  Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
  });