import {rest} from "msw";

const baseURL ="https://react-backend-1102dd957763.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(
            ctx.json({
            "pk": 2,
            "username": "marlon",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 2,
            "profile_image": "https://res.cloudinary.com/dfhoblays/image/upload/v1/media/../default_profile_m1n8tc"
          })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];