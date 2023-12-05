import { describe, expect, it } from "bun:test";

describe("Web Intl", () => {
  it("has globals", () => {
    expect(Intl.Collator.name).toBe("Collator");
    expect(Intl.DateTimeFormat.name).toBe("DateTimeFormat");
    expect(Intl.DisplayNames.name).toBe("DisplayNames");
    expect(Intl.ListFormat.name).toBe("ListFormat");
    expect(Intl.Locale.name).toBe("Locale");
    expect(Intl.NumberFormat.name).toBe("NumberFormat");
    expect(Intl.PluralRules.name).toBe("PluralRules");
    expect(Intl.RelativeTimeFormat.name).toBe("RelativeTimeFormat");
  });

  it("should format", () => {
    const date = new Date("2021-01-01T00:00:00.000Z");
    const number = 123456.789;
    const locale = "en-US";
    const options = { style: "currency", currency: "USD" };
    expect(new Intl.DateTimeFormat(locale).format(date)).toBe("1/1/2021");
    expect(new Intl.NumberFormat(locale, options).format(number)).toBe(
      "$123,456.79"
    );
  });

  it("should list", () => {
    const list = ["a", "b", "c"];
    expect(new Intl.ListFormat("en-US").format(list)).toBe("a, b, and c");
  });

  it("should pluralize", () => {
    const number = 1;
    expect(new Intl.PluralRules("en-US").select(number)).toBe("one");
  });

  it("should format relative time", () => {
    const number = -1;
    const unit = "day";
    expect(new Intl.RelativeTimeFormat("en-US").format(number, unit)).toBe(
      "1 day ago"
    );
  });

  it("should format display names", () => {
    const locale = "en-US";
    const options: Intl.DisplayNamesOptions = { type: "language" };
    expect(new Intl.DisplayNames(locale, options).of("en")).toBe("English");
  });

  it("should compare", () => {
    const collator = new Intl.Collator("en-US");
    const a = "a";
    const b = "b";
    expect(collator.compare(a, b)).toBe(-1);
  });

  it("should format numbers", () => {
    const number = 123456.789;
    expect(new Intl.NumberFormat("en-US").format(number)).toBe("123,456.789");
  });

  it("should format dates", () => {
    const date = new Date("2021-01-01T00:00:00.000Z");
    expect(new Intl.DateTimeFormat("en-US").format(date)).toBe("1/1/2021");
  });

  it("should format relative time", () => {
    const number = -1;
    const unit = "day";
    expect(new Intl.RelativeTimeFormat("en-US").format(number, unit)).toBe(
      "1 day ago"
    );
  });

  it("should format lists", () => {
    const list = ["a", "b", "c"];
    expect(new Intl.ListFormat("en-US").format(list)).toBe("a, b, and c");
  });
});
