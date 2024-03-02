import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, beforeEach, test } from "vitest";
import Opportunities from "../components/Opportunities";
import { BrowserRouter as Router } from "react-router-dom";

describe("Opportunities Component", () => {
  let container;

   beforeEach(() => {
     container = render(
       <Router>
         <Opportunities />
       </Router>
     ).container;
   });

  it("renders the page title", () => {
    expect(container.querySelector("h2")).toHaveTextContent("Internal Opportunities");
  });
});

describe("JobListing", () => {
  let container;

  beforeEach(() => {
    container = render(
      <Router>
        <Opportunities />
      </Router>
    ).container;
  });

  it("renders the page title", () => {
    expect(container.querySelector("h2")).toHaveTextContent("Internal Opportunities");
  });

  it("filters jobs by department", () => {
    const select = container.querySelector("select");
    fireEvent.change(select, { target: { value: "Engineering" } });

    const jobDepartments = container.querySelectorAll(".job-department");
    jobDepartments.forEach((department) => {
      expect(department.textContent).toContain("Engineering");
    });
  });

  it("searches jobs by title", () => {
    const input = container.querySelector("input");
    fireEvent.change(input, { target: { value: "Software Engineer" } });

    const jobTitles = container.querySelectorAll(".text-xl");
    jobTitles.forEach((title) => {
      expect(title.textContent).toBe("Software Engineer");
    });
  });
});
