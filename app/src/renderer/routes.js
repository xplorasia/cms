export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/country',
    name: 'country-page',
    component: require('components/CountryPageView')
  },
  {
    path: '/country/form',
    name: 'country-form-page',
    component: require('components/CountryFormPageView')
  },
  {
    path: '/currency',
    name: 'currency-page',
    component: require('components/CurrencyPageView')
  },
  {
    path: '/currency/form',
    name: 'currency-form-page',
    component: require('components/CurrencyFormPageView')
  }
]
