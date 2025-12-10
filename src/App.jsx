import { useAuth } from "./hooks/use-auth";
import Router from "./router/Router";
import Loading from "./components/Loading";

function App() {
  const { initialLoading } = useAuth();

  if (initialLoading) {
    return <Loading />;
  }
  return <Router />;
}

export default App;

{
  /* <>
<div className="text-2xl text-bold text-cyan-500 bg-black">
  test tailwindcss
</div>
</> */
}
