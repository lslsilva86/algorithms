# What is data structures and algorithms

Data structure is important to store the data but the way of storing the data is more than important than storing the data.

Data structure is not a technique it's a skill. Or it's a knowledge. It's not about only storing or organizing the data. It's also about choosing the right data structure in place. It's not a technique it's a knowledge. both are completely different. Storing the data into some data structure it may be a technique but choosing the right data structure for your situation is a skill. It will come from experience. Choosing a wrong data structure is somewhat similar to choosing a white marker to write it in whiteboard.

Algorithm is step by step instructions working quietly behind the scene. An algorithm as a tool for solving well specified problem. Algorithm means well defined procedures for the implementation. In real time for the specific problem, we might have lot of options to choose from the algorithms. It's very important, analysis the algorithm on choose the right one for our problem statement.


## Visualizing

1. Find out nine million nine hundred ninety nine thousand nine hundred and ninety six. We knew that surely this number will be present between 1 to 10 million. 
Check the numbers one by one from this collection if I found this value.
2. If it's even number why should we check odd numbers?
3. First I find the middle element then based on the middle element I am deciding whether I'm going to travel for first half or second half to find the element. In this case the number we are looking for is greater than the middle element. So obviously we have to go for the second half. So to travel the second half, again I am calling the same method recursively by changing the starting number.


## Why
There are already hundreds of well established algorithms to solve the Rubik's Cube. I'm trying to invent your own method to solved will take much longer than utilizing the current ones.

## Complexity
C0 + n (C1+ C2) + C3 -> n
C0 + n^2 (C1+ C2) + C3 -> n^2
We will take the highest power option as the complexity of the program.

- Big O is the worst case scenario,
- Omega O is the best case scenario.
- Theta O is the average case scenario.

### Logorithms
10 to the power of two? It's hundred. For this kind of function, we have reverse functions that is logarithms, which means log base 10 of hundred, which is equal to two.
We can call the log base 10 as log. In general, scientists and engineers and all, will do the logarithmic calculation with base 10 only.

10^2 = 100
Log100 = 2


## BigO

### O(1)
A = B + C

### O(log n)
```
for (int i=1; i<=n; i = i * 2){
    print "Hello";
}
```

this block of code will act based on log base two the for loop multiplies the current value of I by two. So it's goes from one to two, 2 to 4, 4 to 8, 8 to 16 and 16 to 32 like that. Because every time we are multiplying the I value with two in this block of code, just think we are pausing n value as 8. Initially I value will be one and the next citation it's one into two, two which is equal to two for the next iteration two into two, which is equal to four. And for the next iteration I will be 8. So this hello prints for four times. If I increment the I value by one, this loop will execute for eight times. Here we are doubling the I value on each iteration. So this block of code complexity is log(n). 

```
for (int i=1; i<=n; i = i * 3){
    print "Hello";
}
```
Do this for log base three, Here I value goes from one to three, three to nine and nine to 27 like that. So hello prints for two times because after this loop execute for second time, I value will be nine.


### O(n)
```
for (int i=1; i<=n; i = i++){
    print "Hello";
}
```
If you see this block of code I value is increasing by one. If we pause n as eight here this loop will execute for eight times. If n is a hundred, then it'll be a hundred times. So this code complexity is O of n.

### O(n log n)
```
for (int i=1; i<=n; i = i++){
    for (int j=1; j<=n; j = j*2){
    print "Hello";
    }
}
```
For loop is inside of the another for loop. The first for loop will execute for n times. And inside that the another for loop will execute for log(n) times.


### O(n ^ 2)
```
for (int i=1; i<=n; i = i++){
    for (int j=1; j<=n; j = j + 2){
    print "Hello";
    }
}
```
For loop is inside of another for loop. This second for loop complexity is n and it's present inside of a for loop. Outer loop complexity is also n because we are implementing the I value by one. So n times of n, that is n into n which is equal to n square complexity. 



### O(2 ^ n)
```
int fibonacci(int number){
    if (number <= 1) return number;
    return fibonacci (number - 2) + fibonacci (number -1);
}
```
O of two power n. This fibocanni method will call for two times and recursively it'll call for multiple times. O the complexity is two power n.


```
void loop (int n, int arr[]){
j = 0;
for(int i = 0; i < n; ++i)
    while(j < n && arr[i] < arr[j])
        j++;
}
```
Since j declared outside for for loop, this function complexity will be O(n). If j declared inside of for loop, YES it will run on O(n^2) complexity.

What does it mean when we say that an algorithm A is asymptotically more efficient than B? A will be better choice for all inputs except small inputs.