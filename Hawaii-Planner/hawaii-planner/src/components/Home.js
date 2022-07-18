import { useState} from 'react';
import { Routes, Route, Link, Navigate, useSearchParams, useNavigate } from 'react-router-dom'
import Search from './Search';


const Home = () => {
    
    return (
        <div>
        <h1>Home Component</h1>
        <Search/>
        
        </div>
            
        
    );
};

export default Home;