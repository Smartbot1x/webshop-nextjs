import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";

describe("ProductCard", () => {
  it("renders title and price", () => {
    render(
      <ProductCard
        title="Test Product"
        price={99}
        image={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
      />
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
  });
});
