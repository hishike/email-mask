const email = "teste@testando.com";

const maskEmail = (email) => {
  if (typeof email !== "string") {
    return "Not an email"
  }
  const parts = email.split("@");

  if (parts.length !== 2) {
    return "Not a valid email"
  }

  const [local, domain] = parts;
  const stars = "*".repeat(local.length-1);
  const masked = local[0]+stars+local[local.length - 1];
  return `${masked}@${domain}`
}

console.log(maskEmail(email))