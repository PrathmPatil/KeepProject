import axios from "axios";

export const signup = async (input) => {
    let response = await axios.post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
        input
    );
    console.log("services" + response)

    return response;
};