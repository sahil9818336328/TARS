import Hero from './components/Hero'
import SingleImage from './components/SingleImage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ImgContainer from './components/ImgContainer'
import { AppProvider } from './context'
import HomeLayout from './components/HomeLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

checkDefaultTheme()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: (
            <>
              <Hero />
              <ImgContainer />
            </>
          ),
        },

        {
          path: 'photos/:id',
          element: <SingleImage />,
        },
      ],
    },
  ])
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppProvider>
  )
}

export default App
