import { getServerSession } from "next-auth/next"
import { Auth } from "./auth/[...nextauth]"

export default async (req, res) => {

    const session = await getServerSession(req, res, Auth)

    if (session) {
        res.send({
            content:
                "Signed in"
        })
    } else {
        res.send({
            error: "Sign In"
        })
    }

}