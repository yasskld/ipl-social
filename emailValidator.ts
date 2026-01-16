// Email validation rules are implemented manually (no built-in validator).
export function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;

  // Rule: no spaces
  if (email.includes(" ")) return false;

  // Rule: must contain at least one "@"
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;

  // Rule: must have text before and after "@"
  if (atIndex === 0) return false;
  if (atIndex === email.length - 1) return false;

  // (Optional safety) Reject multiple "@"
  if (email.indexOf("@", atIndex + 1) !== -1) return false;

  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);

  // Rule: domain must contain a dot, and dot cannot be the last character
  const dotIndex = domainPart.indexOf(".");
  if (dotIndex === -1) return false;
  if (domainPart.endsWith(".")) return false;

  // Minimal sanity: prevent empty chunks like "a@.com" or "a@com."
  if (domainPart.startsWith(".")) return false;

  // Keep it simple: we only enforce the rules from the exam statement
  return localPart.length > 0 && domainPart.length > 0;
}
