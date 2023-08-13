//all the names of the functions to import from the library must start with a capital letter
import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import AddTodo from "../components/ass_todo/AddTodo";
import List_todo from "../components/list_todo/list_todo";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    // all the elements here must startwith Capital letter
    <Container>
      <Header />
      <AddTodo />
      <List_todo />
      <Footer />
    </Container>
  );
}
