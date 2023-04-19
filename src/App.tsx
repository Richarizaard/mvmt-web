import PublicRoutes from './routes/PublicRoutes'
import './App.css'

export default function App() {
  return (
    <div className="h-full py-12 px-8 sm:py-28 sm:px-36 flex justify-center">
      <div className="md:max-w-[1200px]">
        <PublicRoutes />
      </div>
    </div>
  )
}
