import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from "../../hook/useAxiosSecure";
import useMenu from "../../hook/useMenu";
import FoodCard from "../Menu/FoodCard";
import OrderTab from "../Menu/OrderTab";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Meals = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu, setMenu] = useMenu();
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/menu?page=${pageNumber}`);
            setMenu(response.data.menu);
            setFilteredMenu(response.data.menu);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const handleLoadMore = () => {
        setPageNumber(pageNumber + 1);
        setIsLoading(true);
        fetchData();
    };

    const handleFilter = (value) => {
        if (value === 'all') {
            setFilteredMenu(menu);
        } else {
            const filtered = menu.filter(item => item.category === value);
            setFilteredMenu(filtered);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Search meal by title" onChange={(e) => handleFilter(e.target.value)} />
            <select onChange={(e) => handleFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
            </select>
            <button onClick={handleLoadMore}>Load More</button>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={filteredMenu}></OrderTab>
                </TabPanel>
            </Tabs>
            {isLoading && <p>Loading...</p>}
        </div>
    );
};

export default Meals;