import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            //verify token secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //attach user to request to decoded data
            req.user = decoded;
            next();
        } catch (error) {
            console.log("Error in auth middleware", error);
            res.status(401).json({ message: "Not authorized" });
        }
    }

    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
    }

};

