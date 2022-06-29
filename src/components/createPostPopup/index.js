import { useEffect, useRef, useState } from "react";
import "./style.css";
import Picker from "emoji-picker-react";
import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import AddToYourPost from "./AddToYourPost";
import ImagePreview from "./ImagePreview";
import useClickOutside from "../../hooks/clickOutside";
import { useRedux } from "../../hooks/useRedux";
import { _createPost } from "../../redux/actions/post/createPost";
import { PulseLoader } from "react-spinners";
export default function CreatePostPopup({ user, togglePopup }) {
  const {dispatch, loading} = useRedux()
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [images, setImages] = useState([]);
  const [background, setBackground] = useState("");
  const popRef = useRef(null)
  useClickOutside(popRef, () => {
    togglePopup()
  })

  // Submit the post 
  const submitPost = () => {
    if(background){
      dispatch(_createPost({background, text}))
    }
  }
  return (
    <div className="blur">
      <div className="postBox" ref={popRef}>
        <div className="box_header">
          <div className="small_circle">
            <i className="exit_icon" onClick={()=>togglePopup()}></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>

        {!showPrev ? (
          <>
            <EmojiPickerBackgrounds
              text={text}
              user={user}
              setText={setText}
              showPrev={showPrev}
              setBackground={setBackground}
              background={background}
            />
          </>
        ) : (
          <ImagePreview
            text={text}
            user={user}
            setText={setText}
            showPrev={showPrev}
            images={images}
            setImages={setImages}
            setShowPrev={setShowPrev}
          />
        )}
        <AddToYourPost setShowPrev={setShowPrev} />
        <button className="post_submit" disabled={loading} onClick={()=> submitPost()}>{loading ? <PulseLoader color="#fff" size={5} /> :'Post' } </button>
      </div>
    </div>
  );
}
