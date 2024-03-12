export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  // Validate if the position is outside the specified range
  if (position >= length) throw new Error('Position outside range');

  // Assign the new value to the specified position
  dv.setInt8(position, value);
  return dv;
}
