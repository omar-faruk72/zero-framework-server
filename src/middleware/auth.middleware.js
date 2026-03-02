import jwt from 'jsonwebtoken';
import config from '../config/index.js';

export const authGuard = (req, res, next) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        // not login
        if(!token){
            return res.status(401).json({ status: false, message: "আপনি লগইন করা নন!" });
                };

                const decoded = jwt.verify(token, config.jwt_secret);
                req.user = decoded;
                next();


    }catch(err){
        res.status(401).json({ status: false, message: "টোকেনটি সঠিক নয় বা মেয়াদ শেষ!" });
    }
}