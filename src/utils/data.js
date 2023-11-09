import { email, getOutput, getPipeIssues, minLength, object, string } from "valibot";

const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;


export const schema = object({
    firstName: string([minLength(1, "First Name cannot be empty")]),
    lastName: string([minLength(1, "Last Name cannot be empty")]),
    email: string([minLength(1, "Email cannot be empty"),
    email("Looks like this is not an email")]),
    password: string([minLength(1, "Password cannot be empty"),
    minLength(8, "Your password must be at least 8 characters"),
    (input) => {
        if (!passwordRegex.test(input)) {
            return getPipeIssues('custom', 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol', input);
        }
        return getOutput(input);
    },]),
})
export const inputs = [
    {
        id: "firstName",
        label: "First Name",
        type: "text"

    },

    {
        id: "lastName",
        label: "Last Name",
        type: "text"

    },
    {
        id: "email",
        label: "Email Address",
        type: "email"
    },
    {
        id: "password",
        label: "Password",
        type: "password",
        autoComplete: "true",

    }

]
