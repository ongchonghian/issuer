import { BillOfLadingTemplate } from "../billOfLadingTemplate";
import { billOfLadingSample } from "../../billOfLadingSample";
import { render } from "@testing-library/react";
import React from "react";

describe("billOfLadingTemplate", () => {
  it("should render with BL No provided by the document", () => {
    const { queryByText } = render(
      <CustomTemplate document={billOfLadingSample} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("B/L No")).toBeTruthy();
  });
  it("should render with default BL No.", () => {
    const { queryByText } = render(
      <BillOfLadingTemplate document={{ ...billOfLadingSample, blNumber: undefined }} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("B/L No")).toBeTruthy();
  });
});
