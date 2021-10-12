import React from 'react';
import { Link } from "react-router-dom";
import LibreryImg from '../../img/libreria.jpg';
import ArtImg from '../../img/art.jpg';
      
    const Home = () => {
        return (
            <>
            <div className="flex flex-col justify-center items-center h-screen py-40 md:bg-hero-pattern" >
                <h1 className="text-3xl mb-2 text-summerGreen"> NEW IN! </h1>
                <p className="mb-2 text-summerGreen"> Mirá lo nuevo en vajilla </p>
                <Link to="/category/vajilla" className="py-6 px-10 bg-btn rounded-full text-2xl hover:bg-btn-light transition duration-300 ease-in-out flex items-center text-shipGray">
                     VER AHORA 
                </Link>
            </div>

            <div className="flex flex-row justify-center            items-center h-screen py-40">
                <img src={LibreryImg} alt='by <a href="https://unsplash.com/@bajkorenata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Renáta-Adrienn</a> on <a href="https://unsplash.com/s/photos/pen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                ' className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl mb-2">Librería</h2>
                    <p className="mb-2">Para la oficiona, los estudios o pasar el tiempo</p>
                    <Link to='/category/libreria' className="py-4 px-10 bg-btn rounded-full text-2xl hover:bg-btn-light transition duration-300 ease-in-out flex items-center">
                    Ver más!
                    </Link>
                </div>

                
                <img src={ArtImg} alt='by <a href="https://unsplash.com/@jonnysplsh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonny Caspari</a> on <a href="https://unsplash.com/s/photos/indoor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
   className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl mb-2">Deco</h2>
                    <p className="mb-2">De locales, para decorar tus espacios como más te guste.</p>
                    <Link to='/category/deco' className="py-4 px-10 bg-btn rounded-full text-2xl hover:bg-btn-light transition duration-300 ease-in-out flex items-left">
                    Ver más!
                    </Link>
                </div>
            </div>
            </>
        )
      }
      

export default Home;