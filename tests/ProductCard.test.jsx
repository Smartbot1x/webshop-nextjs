import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../app/components/ProductCard";

describe("ProductCard", () => {
  it("renders title and price", () => {
    render(
      <ProductCard title="Jae Namaz" price={99} image={"/placeholder.png"} />
    );
    expect(screen.getByText("Jae Namaz")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
  });
});
