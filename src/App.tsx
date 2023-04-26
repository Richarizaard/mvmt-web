import PublicRoutes from './routes/PublicRoutes'
import './App.css'

export default function App() {
  return (
    <div className="h-full py-20 px-12 md:px-24 flex justify-center">
      <div className="lg:max-w-[1000px]">
        <PublicRoutes />
      </div>
    </div>
  )
}
