---
layout: post
title: The beginning of Rust(1)
categories: [Rust]
---
## Preview
In this article, I will follow [Getting Started](https://doc.rust-lang.org/stable/book/ch01-00-getting-started.html) part to install Rust and learning how to use Cargo. 

### Install Rust on MacOs
```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```
```bash
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.zshrc  # or maybe bash_profile
```
```bash
rustc --version
# rustc 1.59.0
```
### Hello Cargo
Cargo is Rust`s build system and package manager.
#### Creating a project with Cargo
```bash
cargo new hello_cargo
```
Open Cargo.toml file. `.toml` is Cargo's congiguration format. (TOML, Tom's obvious, Minimal launguage.)
```toml
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

[dependencies]
# In Cargo, packages of codes are referred to as crates.
```
We can build this project by using `cargo build`.`cargo build` creates an executable file in `./taget/debug/hello_cargo` rather than in your current directory. You can run the executable with this command.
We can also use `cargo run` to compile the code and then run the resulting executable all in on command.
There is another command, `cargo check`, which quickly checks your code to make sure it compiles but doesn`t produce an executable. (I found it very useful.)

**Build for release**
When your project is finally ready for release. you can use `cargo build --release` to compile it with optimizations. This command will create an executable in `./target/release` instead of `./target/debug`. The optimizations make your Rust code run faster, but turning them on lengthens the time it takes.