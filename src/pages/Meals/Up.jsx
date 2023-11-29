import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from "../../hook/useAxiosSecure";
import useMenu from "../../hook/useMenu";
import FoodCard from "../Menu/FoodCard";
import OrderTab from "../Menu/OrderTab";
import { useState } from 'react';


const Up = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const all=menu;
    return (
        <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
              <Tab>All</Tab>
           
          </TabList>
          <TabPanel>
              <OrderTab items={all}></OrderTab>
          </TabPanel>
         
         
      </Tabs>
      
   
  </div>
    );
};

export default Up;