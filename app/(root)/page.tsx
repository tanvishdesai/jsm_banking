import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidear from "../components/RightSidear";

const Home = () => {
  const loggedIn = {firstName: 'tanvish',email: 'tanvishdesai@gmail.com', lastName: 'desai'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type ="greeting"
            title = "welcome"          
            user ={loggedIn?.firstName || 'Guest'}
            subtext = "access and manage all your transaction in one place"
          />
          <TotalBalanceBox  
          accounts = {[]}
          totalBanks={1}
          totalCurrentBalance={1250.35} />
        </header>
        RECENT TRANSACTION
      </div>


      <RightSidear user={loggedIn} transactions={[]} banks={[{currentBalance:123.5},{currentBalance:5555.95}]} />
    </section>
  );
};

export default Home;
