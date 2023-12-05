/**
 * Convert a number to its Indonesian Rupiah (IDR) currency format.
 * The function returns a string that represents the number formatted in IDR.
 *
 * @param {number} number - The numeric value to be formatted as IDR.
 * @returns {string} - The formatted string in IDR currency format.
 */
export function toRupiah(number: number): string {
  // Check for invalid input
  if (typeof number !== "number" || Number.isNaN(number)) {
    throw new Error("Invalid input: The input should be a valid number.");
  }

  // Configure the Intl.NumberFormat object for IDR currency formatting
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  };

  // Create a new Intl.NumberFormat instance and format the number
  const formatter = new Intl.NumberFormat("id-ID", options);
  return formatter.format(number);
}
