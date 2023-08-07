import Head from "next/head";

import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.auth";
const HomePage = () => {
  const { data: session } = useSession();

  const [user, loading, error] = useAuthState(auth);

  console.log("From Home Page", user);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      {/* <h2 style={{ textAlign: "center" }}>
        New Loggid In User: {session?.user?.name}
      </h2> */}
      {user?.email && (
        <h3 style={{ textAlign: "center" }}>
          New Loggid In User Email: {user?.email}
        </h3>
      )}
    </div>
  );
};

export default HomePage;
