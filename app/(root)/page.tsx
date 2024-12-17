import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidebar from "../components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
const loggedIn = await getLoggedInUser()
  return (
    <section className="home" suppressHydrationWarning>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type ="greeting"
            title = "welcome"          
            user ={loggedIn?.name || 'Guest'}
            subtext = "access and manage all your transaction in one place"
          />
          <TotalBalanceBox  
          accounts = {[]}
          totalBanks={1}
          totalCurrentBalance={1250.35} />
        </header>
        RECENT TRANSACTION
      </div>


      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.5},{currentBalance:5555.95}]} />
    </section>
  );
};

export default Home;
