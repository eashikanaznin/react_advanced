import { Child } from "./Child";
import styles from "./App.module.css";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

export default function App() {
  // const ReadHead = styled.h1`
  // color: green
  // `
  const ReadHead = styled.h1`
    color: green;
  `;
  return (
    <>
      <b className="text-yellow-500">Asman</b>
      <ReadHead>HERE I AM</ReadHead>
      <h1 className={styles.header}>Hi</h1>

      <Button as="a" variant="success">
        Bootstrap Button as link
      </Button>

      <Child />
    </>
  );
}
