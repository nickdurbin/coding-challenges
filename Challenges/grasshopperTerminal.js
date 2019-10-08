// Description:
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// Code given
function move (position, roll) {
  
}

// My Solution
function move (position, roll) {
  return position + roll * 2
}

// Test Cases
describe('move function', () => {
  it('fixed tests', () => {
    Test.assertEquals(move(0,4), 8)
    Test.assertEquals(move(3, 6), 15)
    Test.assertEquals(move(2, 5), 12)
  })
  it('random tests', () => {
    const solution = (p, r) => p + 2 * r
    const floorRand = max => Math.floor(Math.random() * max) + 1
    for (let i = 0; i < 20; i++) {
      let roll = floorRand(6)
      let position = floorRand(20)
      Test.assertEquals(move(position, roll), solution(position, roll))
    }
  })
})