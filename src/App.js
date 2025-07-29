import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation, } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
import ScrollToTop from './ScrollToTop.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import RecipesPage from './pages/RecipesPage.js';
import ContactPage from './pages/ContactPage.js';
import CareersPage from './pages/CareersPage.js';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js';
import TermsOfServicePage from './pages/TermsOfServicePage.js';
import FeaturesPage from './pages/FeaturesPage.js';
import CookiePolicyPage from './pages/CookiePolicyPage.js';
import FAQSPage from './pages/FAQSPage.js';
import RegisterPage from './pages/RegisterPage.js';
import SigninPage from './pages/SignInPage.js';
import ChoicePage from './pages/ChoicePage.js';
import AddItemManually from './pages/AddItemManually.js';
import AutoGenExpirPage from './pages/AutoGenExpirPage.js';
import Home from './pages/Home.js';
import Suggestions from './pages/Suggestions.js';
import DashboardPreviewSection from './components/DashboardPreviewSection.js';
import NotFoundPage from './pages/NotFoundPage.js';
import ViewRecipePage from "./pages/ViewRecipePage";
import PrivateRoute from './components/PrivateRoute.js'

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [activeNavChoice, setActiveNavChoice] = useState('home');

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

const getHeaderChoiceFromPath = (path) => {
  if (path === '/' || path === '/#/' || path === '#/') return 'home';
  if (path.includes('about')) return 'about';
  if (path.includes('privacy_policy')) return 'privacy_policy';
  if (path.includes('contact')) return 'contact';
  if (path.includes('terms_of_service')) return 'terms_of_service';
  if (path.includes('recipes')) return 'recipes';
  if (path.includes('careers')) return 'careers';
  if (path.includes('features')) return 'features';
  if (path.includes('cookie_policy')) return 'cookie_policy';
  if (path.includes('help_center') || path.includes('faqs')) return 'faqs';
  if (path.includes('register')) return 'register';
  if (path.includes('signin')) return 'signin';
  if (/\/recipe\/[^/]+/.test(path)) return 'recipes';
  return 'home';
};


  useEffect(() => {
    const fullPath = location.pathname.toLowerCase() + location.hash.toLowerCase();
    const newChoice = getHeaderChoiceFromPath(fullPath);
    if (newChoice !== activeNavChoice) {
      setActiveNavChoice(newChoice);
      localStorage.setItem('activeNavChoice', newChoice);
    }
  }, [location]);


  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('mealMateUserData');
    return saved ? JSON.parse(saved) : [];
  });


  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('mealMateUserData', JSON.stringify(data));
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [data, isLoggedIn]);


  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout activeNavChoice={activeNavChoice} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}>
          <Route
            index
            element={
              <HomePage
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                foodItems={foodItems}
                setFoodItems={setFoodItems}
                recipes={recipes}
                data={data}
                setData={setData}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="about" element={
            <AboutPage />
          } />
          <Route path="/recipe/:id" element={<ViewRecipePage />} />

          <Route path="recipes" element={
            <PrivateRoute>
            <RecipesPage />
            </PrivateRoute>
            } />
          <Route path="contact" element={
            <ContactPage />
          } />
          <Route path="careers" element={
            <PrivateRoute>
            <CareersPage />
            </PrivateRoute>
          } />
          <Route path="privacy_policy" element={
            <PrivacyPolicyPage />
          } />
          <Route path="terms_of_service" element={
            <TermsOfServicePage />
          } />
          <Route path="features" element={
              <FeaturesPage />
            } />
          <Route path="cookie_policy" element={
            <CookiePolicyPage />
          } />
          <Route path="FAQs" element={
              <FAQSPage />
            } />
          <Route path="register" element={<RegisterPage data={data} setData={setData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="signin" element={<SigninPage data={data} setData={setData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        </Route>

        <Route
          path="/track_expiry_dates"
          element={
            <PrivateRoute>
            <Home
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              foodItems={foodItems}
              setFoodItems={setFoodItems}
            />
            </PrivateRoute>
          }
        />
        <Route path="/trackFoodExpiry" element={
          <PrivateRoute>
          <ChoicePage />
          </PrivateRoute>
        } />
        <Route
          path="/add_item_manually"
          element={
          <PrivateRoute>
          <AddItemManually foodItems={foodItems} setFoodItems={setFoodItems} />
          </PrivateRoute>}
        />
        <Route
          path="/auto_generate_expiry_date"
          element={
          <PrivateRoute>
          <AutoGenExpirPage foodItems={foodItems} setFoodItems={setFoodItems} />
          </PrivateRoute>}
        />
        <Route
          path="/suggestions"
          element={
          <PrivateRoute>
            <Suggestions recipes={recipes} setRecipes={setRecipes} />
            </PrivateRoute>
            }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardPreviewSection
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              foodItems={foodItems}
              setFoodItems={setFoodItems}
              recipes={recipes}
            />
          }
        />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <NotFoundPage />
          }
        />
      </Routes>
    </>
  );
};

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <AppRoutes />
  </HashRouter>
);

export default App;
