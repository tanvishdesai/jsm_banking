import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {firstname: 'tanvish'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type ="greeting"
            title = "welcome"          
            user ={loggedIn?.firstname || 'Guest'}
            subtext = "access and manage all your transaction in one place"
          />
          <TotalBalanceBox  
          accounts = {[]}
          totalBanks={1}
          totalCurrentBalance={1250.35} />
        </header>
      </div>
    </section>
  );
};

export default Home;
