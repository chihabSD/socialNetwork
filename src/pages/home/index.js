import { useRedux } from "../../hooks/useRedux";
import { _onLogout } from "../../redux/actions/auth/logout";

export default function Home() {
  const { dispatch,   successMsg } = useRedux()
  return <div>
    Home
    <div onClick={()=> dispatch(_onLogout())}> Logout </div>
  </div>;
}
