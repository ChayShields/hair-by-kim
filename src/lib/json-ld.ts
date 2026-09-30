// Serialises structured data for a <script type="application/ld+json"> block.
// Escaping < > & and the two JavaScript line separators keeps the output valid
// JSON that a browser can never read as HTML, whatever the data contains.
export function jsonLd(data: unknown) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(new RegExp(String.fromCharCode(0x2028), "g"), "\\u2028")
    .replace(new RegExp(String.fromCharCode(0x2029), "g"), "\\u2029")
}
