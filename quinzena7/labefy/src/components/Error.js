import React from "react";
import styled from "styled-components";
import { MdReportProblem } from "react-icons/md";

export default class Error extends React.Component {
  render() {
    return (
      <>
        <MdReportProblem size={50} color={"#1e824c"} />
        <h1>Não foi possível localizar a página</h1>
        
      </>
    );
  }
}
