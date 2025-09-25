import UpdateUserForm from "@/components/forms/updateuser-form";
import { cookies } from "next/headers";

export default async function ProfilePage() {

const cookieStore = await cookies()
    const cookieId = cookieStore.get("usertokenid")
    const cookieToken = cookieStore.get("usertoken")

    const userResponse = await fetch(`http://localhost:4000/api/v1/users/${cookieId.value}`, {
        "method": "GET",
         "headers": {
    "Authorization": `Bearer ${cookieToken.value}`
  }
    })
    const userJson = await userResponse.json();
    console.log("user", userJson)

    return(
    <>
    <h3>Hello {userJson.firstname} {userJson.lastname}</h3>
    <UpdateUserForm user={userJson}/>
    </>
)
}