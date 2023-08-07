export { default } from "next-auth/middleware";

export const config = { matcher: ["/profile"] }; // here in matcher array you can add any other routes which you want to protected such as {matcher:["/profiel","/dashboard", ...]}
