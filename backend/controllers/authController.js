import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
    try {
        const { token } = req.body // for receiving token from frontend

        //verify google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        //get user info from payload 
        const { name, email, picture, sub: googleId } = ticket.getPayload();

        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({
                message: "Access denied. Only the admin can log in."
            });
        }

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({
                name,
                email,
                googleId,
                avatar: picture,
            });
        }
        //generate jwt token
        const jwtToken = jwt.sign({ userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        //send user data and token to frontend
        res.status(200).json({
            message: "Login successful",
            token: jwtToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
            }
        });
    } catch (error) {
        console.log("Error in google login", error);
        res.status(401).json({ message: "Invalid Google token" });
    }
};
