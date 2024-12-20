import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidebar from "../components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import RecentTransactions from "../components/RecentTransactions";

const Home = async ({ searchParams: {id, page}}: SearchParamProps ) => {
const currentPage = Number(page as string) || 1
const loggedIn = await getLoggedInUser()
const accounts = await getAccounts({userId: loggedIn.$id})

if(!accounts) return;

const appwriteItemId =  (id as string) || accounts?.data[0]?.appwriteItemId

const account = await getAccount({ appwriteItemId }) 
  return (
    <section className="home" suppressHydrationWarning>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type ="greeting"
            title = "welcome"          
            user ={loggedIn?.firstName || 'Guest'}
            subtext = "access and manage all your transaction in one place"
          />
          <TotalBalanceBox 
            accounts={accounts?.data}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
       <RecentTransactions accounts={accounts?.data} transactions={accounts?.tarnsactions} appwriteItemId={appwriteItemId} page={currentPage} />
      </div>


      <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accounts?.data?.slice(0, 2)}
      />    
    </section>
  );
};

export default Home;
