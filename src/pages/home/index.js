import { useRef, useState } from "react";
import { ref } from "yup";
import Header from "../../components/header";
import useClickOutside from "../../hooks/clickOutside";
import { useRedux } from "../../hooks/useRedux";
import { _onLogout } from "../../redux/actions/auth/logout";

const Home = () => {
  const [visible, setVisible] = useState(true)
  const el = useRef (null)
  useClickOutside(el, () => {
    setVisible(false)
  })
  // useClickOutside (el, () => {
  //   el.current.style.display = 'none'
  // })
  const { dispatch,   successMsg } = useRedux()
  return <div>
    <Header />

    {visible &&
    
<div className="card" ref={el}></div>
    }
    <div onClick={()=> dispatch(_onLogout())}> Logout </div>
  </div>;
}
export default Home