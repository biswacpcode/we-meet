"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async() =>{
    const user = await currentUser();

    if(!user) throw new Error ("No user logged in");

    if(!apiKey) throw new Error("No API KEY");
    if(!apiSecret) throw new Error("No API SECRET KEY");

    const client = new StreamClient(apiKey, apiSecret)

    const exp = 60*60;

    const token = client.generateUserToken({user_id: user.id,validity_in_seconds:exp});

    return token;

}