import { formatCentsInReal } from "../../utils/formatCentsInReal";

describe("formatCentsToReal test", () => {
  it("should return a formatted amount", () => {
    const amount = 1600;

    const result = formatCentsInReal(amount);
    expect(result).toBeTruthy();
  });
});
