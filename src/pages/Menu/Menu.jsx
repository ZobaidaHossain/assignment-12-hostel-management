
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hook/useMenu';
import OrderTab from './OrderTab';
import { Link } from 'react-router-dom';
const Menu = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    
    const Breakfast = menu.filter(item => item.category === 'Breakfast');
    const Lunch = menu.filter(item => item.category === 'Lunch');
    const Dinner = menu.filter(item => item.category === 'Dinner');
    const all=menu;

    return (
        <div>
              <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={all}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Breakfast}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Lunch}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Dinner}></OrderTab>
                </TabPanel>
               
            </Tabs>
            <Link to="/meals"className='btn btn-warning'>See All</Link>
         
        </div>
    );
};

export default Menu;