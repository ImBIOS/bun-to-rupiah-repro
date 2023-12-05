import { describe, expect, it } from "bun:test";
import { toRupiah } from ".";

describe("Number utility functions", () => {
  describe("toRupiah()", () => {
    describe.each([
      [1000, "Rp1.000"],
      [15000, "Rp15.000"],
      [1234567890, "Rp1.234.567.890"],
    ])("toRupiah() - %i should format to %s", (input, expected) => {
      it(`formats ${input} into Indonesian Rupiah as ${expected}`, () => {
        expect(toRupiah(input)).toEqual(expected);
      });
    });

    describe.each([
      [0, "Rp0"],
      [-1000, "-Rp1.000"],
      [-15000, "-Rp15.000"],
      [-1234567890, "-Rp1.234.567.890"],
    ])(
      "toRupiah() - %i should handle zero and negative correctly as %s",
      (input, expected) => {
        it(`handles ${input} correctly`, () => {
          expect(toRupiah(input)).toEqual(expected);
        });
      }
    );

    it("throws an error for invalid input", () => {
      expect(() => toRupiah(NaN)).toThrow(
        "Invalid input: The input should be a valid number."
      );
      expect(() => toRupiah(undefined as any)).toThrow(
        "Invalid input: The input should be a valid number."
      );
    });
  });
});
