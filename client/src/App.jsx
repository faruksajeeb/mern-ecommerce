import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
// import NotFoundPage from "./pages/404-page.jsx";
import RegistrationPage from "./pages/account-registration-page.jsx";
import BlogPage from "./pages/blog-page.jsx";
import CartPage from "./pages/cart-page.jsx";
import CheckoutPage from "./pages/checkout-page.jsx";
import ContactPage from "./pages/contact-page.jsx";
import AskedQuestionPage from "./pages/frequently-asked-questions-page.jsx";
import PrivacyPolicyPage from "./pages/privacy-policy-and-terms-of-use-page.jsx";
import ProductPage from "./pages/product-page.jsx";
import ReviewPage from "./pages/reviews-or-cases-page.jsx";
import SearchPage from "./pages/search-results-page.jsx";
import ThankYouPage from "./pages/thank-you-page.jsx";

const App = () => {
  return (
    <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/blog" element={<BlogPage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    {/* <Route path="/verify/:email" element={<VerifyPage/>}/> */}
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/ask-question" element={<AskedQuestionPage/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="/review" element={<ReviewPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/thank-you" element={<ThankYouPage/>}/>
                </Routes>
        </BrowserRouter>
  );
};

export default App;