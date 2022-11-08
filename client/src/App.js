import React from "react";
import { Route, Routes, Navigate, useParams, Router } from "react-router-dom";
import MediaQuery, { useMediaQuery } from "react-responsive";
import "@stripe/stripe-js";
import "./App.scss";

import { useDispatch } from "react-redux";

import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from "./firebase/firebase.utils";

import { setCategories } from "./store/categories/categories.actions";

import { setCurrentUser } from "./store/user/user.actions";

//Pages
import HomePage from "./pages/homepage/homepage.page";
import HomePageMobile from "./pages/homepage-mobile/homepage-mobile.page";

import ShopPage from "./pages/shop/shop.page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import AccountPage from "./pages/account-page/account-page.page";

import ProductPage from "./pages/product-page/product-page.page";
import ProductPageMobile from "./pages/product-page-mobile/product-page-mobile.page.jsx";

import CheckoutPage from "./pages/checkout/checkout.page";
import CheckoutPageMobile from "./pages/checkout-mobile/checkout-mobile.page";

import AboutPage from "./pages/about/about.page";
import AboutPageMobile from "./pages/about-moble/about-mobile.page";

import GlossaryPage from "./pages/glossary/glossary.page";
import GlossaryPageMobile from "./pages/glossary-mobile/glossary-mobile.page";

import FAQsPage from "./pages/faqs/faqs.page";
import FAQsPageMobile from "./pages/faqs-mobile/faqs-mobile.page";

import PrivacyPolicyPage from "./pages/privacy-policy/privacy-policy.page";
import TermsOfServicePage from "./pages/terms-of-service/terms-of-service.page";
import SeasonsDealsPage from "./pages/seasons-deals/seasons-deals.page";
import AmbassadorProgramPage from "./pages/ambassador-program/ambassador-program.page";
import AffirmPage from "./pages/affirm/affirm.page";

import CheckoutCompletePage from "./pages/checkout-complete/checkout-success.page";

//Components
import Header from "./components/header/header.component";
import HeaderMobile from "./components/header-mobile/header-mobile.component";

import Banner from "./components/banner/banner.component";
import Footer from "./components/footer/footer.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import FooterMobile from "./components/footer-mobile/footer-mobile.component";
import ShopPageMobile from "./pages/shop-mobile/shop-mobile.page";

library.add(fas, fab, far);

const App = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Banner message="Lifetime Guarantee | Free Shipping in U.S and Canada | Holiday Order Deadlines" />

      <MediaQuery maxWidth={768}>
        <HeaderMobile />
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <Header />
      </MediaQuery>

      <ScrollToTop>
        <Routes>
          <Route
            exact
            path="/"
            element={isMobileDevice ? <HomePageMobile /> : <HomePage />}
          />
          <Route
            exact
            path="/#/shop/products/:filter"
            element={isMobileDevice ? <ShopPageMobile /> : <ShopPage />}
          />
          <Route exact path="/#/sign-in" element={<SignInAndSignUpPage />} />
          <Route exact path="/#/my-account" element={<AccountPage />} />
          <Route
            exact
            path="/#/product-details/:id"
            element={isMobileDevice ? <ProductPageMobile /> : <ProductPage />}
          />
          <Route
            exact
            path="/#/checkout"
            element={isMobileDevice ? <CheckoutPageMobile /> : <CheckoutPage />}
          />
          <Route exact path="/#/search/results" element={<ProductPage />} />
          <Route
            exact
            path="/#/about"
            element={isMobileDevice ? <AboutPageMobile /> : <AboutPage />}
          />
          <Route
            exact
            path="/#/glossary"
            element={isMobileDevice ? <GlossaryPageMobile /> : <GlossaryPage />}
          />
          <Route
            exact
            path="/#/faqs"
            element={isMobileDevice ? <FAQsPageMobile /> : <FAQsPage />}
          />
          <Route
            exact
            path="/#/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
          <Route exact path="/#/seasons-deals" element={<SeasonsDealsPage />} />
          <Route
            exact
            path="/#/brand-ambassador-program"
            element={<AmbassadorProgramPage />}
          />
          <Route
            exact
            path="/#/terms-of-service"
            element={<TermsOfServicePage />}
          />
          <Route
            exact
            path="/#/checkout-success"
            element={<CheckoutCompletePage />}
          />
          <Route exact path="/#/affirm" element={<AffirmPage />} />
        </Routes>
      </ScrollToTop>

      <MediaQuery maxWidth={768}>
        <FooterMobile />
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <Footer />
      </MediaQuery>
    </div>
  );
};

export default App;
