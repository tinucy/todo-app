import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import AddTodo from "../components/ass_todo/AddTodo";
import list_todo from "../components/list_todo/list_todo";
import footer from "../components/footer/footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <list_todo />
      <footer />
    </Container>
  );
}
