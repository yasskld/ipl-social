export function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;

  if (email.includes(" ")) return false;

  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;
  if (atIndex === 0) return false;
  if (atIndex === email.length - 1) return false;

  if (email.indexOf("@", atIndex + 1) !== -1) return false;

  const domainPart = email.slice(atIndex + 1);

  const dotIndex = domainPart.indexOf(".");
  if (dotIndex === -1) return false;
  if (domainPart.endsWith(".")) return false;
  if (domainPart.startsWith(".")) return false;

  return true;
}
