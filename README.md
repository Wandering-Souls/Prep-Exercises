## Prep-exercises

This repository includes prep exercises of javascript & API module.

## Week 2

- Which way of representing the traffic light did you find better? Why?  
  I find the second way better as it shows all the possible states, it also makes our code readable and easy to understand.
- What happens if you change the loop to a do-while loop instead of a while loop? Why?  
  I tried the exercise with do-while loop and there was no change in this case, but in general it's better to not use do-while loop because even if the condition is not met do-while loop runs at least once as it evaluates the loop condition at the end of the loop.

- We could have also used a `for` loop to make the traffic light do 2 full rotations. Do you think that would be better? Why or why not?  
  **No!**
  `While` loop and `for` loop both have the same performance, the main differences are their syntax and the way they work.

## Week 3

- This time the loop was changed to a for loop that will run the code 6 times. Why was that needed?  
  In order to get two cycles, we need to run the codes 6 times as we have have 3 states. I think running a loop through the currentStates is more clear and straightforward for representing the way that traffic light works rather than writing a conditional statement for each state.

- Why was the trafficLight added to the `main` function and not left at the top of the file?  
  The browser read the functions based on their sequence. Since we call `getCurrentTrafficLightState` and `getNextStateIndex` functions in the `main` function, we cannot write `main` function at the top or before these functions as it cannot access them or they are not available yet.

- What do you think is the advantage of having the `getCurrentTrafficLightState` and `getNextStateIndex` functions?  
  Using functions make it clear what the codes do in each function, in other word, we can see the functionality of group of codes included in that specific section/function so the codes are **self- documenting**!. Also we can call them in different part of the project.

- The `valueCounts` is implemented as an array. Do you think there is another way to store this? Why do you think the decision was made to go with an array?  
  I think using an array makes it easy to loop through the `valueCounts` in the following step.
- What do you think about the code division? Would you add another function or maybe remove one? Why?

## Week 4
