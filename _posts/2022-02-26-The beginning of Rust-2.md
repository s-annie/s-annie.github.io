---
layout: post
title: The beginning of Rust(2)
categories: [Rust]
---
## Preview
In this article, I will follow [Programming a Guessing name](https://doc.rust-lang.org/stable/book/ch02-00-guessing-game-tutorial.html) to learn some basic syntax and concepts of Rust.



### Full sample code
github repo: https://github.com/s-annie/rust-tutorials/tree/main/guessing_name
```rust
use std::io;
use rang::Rng;

fn main() {
    println!("Guess the number!");
    let secret_number = rand::thread_rng().gen_range(1..101);
    loop {
        println!("Please input your guess.");
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        println!("The secret number is:{}, You guessed: {}", secret_number, guess);

        march guess.cmp(&secret_number) {
            Ordering:Less => println!("Too small!"),
            Ordering:Greater => println!("Too big!"),
            Ordering:Equal => {
                println!("You win!!");
                break;
            }
        }
    }
}
```
### Dive into the code
#### `std::io`
By default, Rust has few items defines in the standard library that it brings into the scope of every program. This set is called the `prelude`.   
If a type you want to use isn`t in the prelude, you have to bring that type into scope exlicitly with a use statement.

##### `let mut guess = String::new()`
`let` statement is used to create the variable. For example, `let apples = 5` creates a new variable named `apples` and binds it to the value 5.   
In Rust, variables are immutable by default. `mut` can make a variable mutable.   
`String::new()` returns a new instance of s `String`. So in full, the line has created a mutable variable that is currently bound to a new, empty instance of a `String`.

#### `io::stdin()`, `.readline(&mut guess)`
`stdin()` functions allow us to handle input. The line `.read_lin(&mut guess)` calls the `read_line` method on the input handle, which's full job is to take whatever the user types into standard input and append that into a string.
The `&` indicates taht this argument is a reference. References are a complex feature, and ont the Rust's major advantages is how safe and easy it is to use references. Later in the other chapters it will be explained more thoroughly.

#### `let guess: u32 = match guess.trim().parse()`
Rust allows us to shadow the previous value of guess with a new one. Shadowing let us reuse the guess variable name. We bind this new variable to the expression `guess().trim().parse()`.  
The `guess` in the expression refers to the original variable that contained the input as s string. The `trim` method on a `String` instance will eiliminate any whitespace at the beginning and end. The `parse` method on Strings parsed a string into some kind of number. The colon after guess tells Rust we'll annotate the variable's type.

`match` is used to handle the error. The parse returns a Result type, which is an enum that has the variants `Ok` or `Err`. If parse is able to successfully turn the string into a number, it will return an `Ok` value that contains the resulting number. 
