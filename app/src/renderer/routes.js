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
  }
]
