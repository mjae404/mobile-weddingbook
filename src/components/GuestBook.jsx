import React, {useState} from "react";
import styles from "../styles/components/GuestBook.module.scss";
import GuestBookComment from "./GuestBookComment";
import useGuestbook from "../hooks/useGuestbook";

function GuestBook() {
    const { data: { comments }, addComment } = useGuestbook();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        addComment(name, message);

        setName("");
        setMessage("");
    };

    return (
        <>
            <div className={styles['guestbook-area']}>
                <h2 className="section-title">방명록</h2>
                <div className={styles["guestbook-form"]}>
                    <div className={styles["guestbook-name-container"]}>
                        <input
                            type="text"
                            className={styles["guestbook-name"]}
                            placeholder="이름을 입력해주세요."
                            value={name}
                            required={true}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <textarea
                        className={styles["guestbook-textarea"]}
                        placeholder="축하의 말을 작성해주세요."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className={styles["guestbook-submit-button"]}
                        onClick={handleSubmit}
                    >
                        작성
                    </button>
                </div>
                {comments.length >= 1 ? (
                    <ul className={styles['guestbook-list']}>
                        {comments.slice().reverse().map((comment, index) => (
                            <GuestBookComment contents={comment} key={index} />
                        ))}
                    </ul>
                ) : (
                    <p className={styles['guestbook-no-result']}>등록된 방명록이 없습니다.</p>
                )}
            </div>
        </>
    );
}

export default GuestBook;
