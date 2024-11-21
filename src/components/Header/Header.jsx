import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'><b>Welcome to BookLib !</b>

<br></br>
Discover your next favorite read with ease. Our platform is designed to make finding books you'll love simple and enjoyable.

<br></br>How It Works:

<b>Personalized Suggestions:</b> Get book recommendations tailored to your unique tastes, whether you enjoy fiction, non-fiction, mysteries, or any other genre.
Explore Genres and Authors: Browse through a wide variety of genres and discover new authors.
<b>Community Favorites:</b> See what other readers in the community are loving right now, and add their favorites to your reading list.
<b>Library Availability:</b> Check if your desired book is available in our library and reserve it instantly.
Get Started! Dive into the world of books, explore curated collections, and embark on new literary adventures. Whether you’re an avid reader or just getting started, we’re here to guide your reading journey.
<br></br>
Ready to discover your next book? start exploring today!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header