import difference from "./difference";
import { describe, expect, it } from "vitest";

// !Large files with several test can have their own test file ie this one, but small test can be done inline in same file
describe("#difference", () => {
  it("returns 0 with no numbers", () => {
    expect(difference()).toBe(0);
  });

  // it("returns same number with one number", () => {
  //   expect(difference(2)).toBe(2);
  // });

  // it("returns difference with multiple numbers", () => {
  //   expect(difference(1, 2, 3)).toBe(6);
  // });
});
