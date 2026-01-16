import { isValidEmail } from "./emailValidator";

describe("isValidEmail", () => {
  test("valid email", () => {
    expect(isValidEmail("john.doe@example.com")).toBe(true);
  });

  test("must contain @", () => {
    expect(isValidEmail("john.doeexample.com")).toBe(false);
  });

  test("must not contain spaces", () => {
    expect(isValidEmail("john doe@example.com")).toBe(false);
  });

  test("must have text before and after @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
    expect(isValidEmail("john.doe@")).toBe(false);
  });

  test("domain must contain a dot and dot cannot be the last character", () => {
    expect(isValidEmail("john.doe@examplecom")).toBe(false);
    expect(isValidEmail("john.doe@example.")).toBe(false);
  });
});
