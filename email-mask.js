const email = [
"apple.pie@example.com",
"freecodecamp@example.com",
"info@test.dev",
"user@domain.org",
];

const maskEmail = (email) => {
  if (typeof email !== "string") {
    return "Not an email"
  }
  const parts = email.split("@");

  if (parts.length !== 2) {
    return "Not a valid email"
  }

  const [local, domain] = parts;
  const stars = "*".repeat(local.length-2);
  const masked = local[0]+stars+local[local.length - 1];
  return `${masked}@${domain}`
}

console.log(maskEmail(email))
email.forEach(emailTest => console.log(maskEmail(emailTest)));