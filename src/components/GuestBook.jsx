import React, {useState} from "react";
import styles from "../styles/components/GuestBook.module.scss";
import GuestBookComment from "./GuestBookComment";
import useGuestbook from "../hooks/useGuestbook";

function GuestBook() {
    const { data: { comments }, addComment, deleteComment } = useGuestbook();
    const [deletePopup, setDeletePopup] = useState(null);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        // 이름, 비밀번호, 메시지를 이용하여 글 추가
        addComment(name, password, message);

        // 추가 후 입력 필드 초기화
        setName("");
        setPassword("");
        setMessage("");
    };

    const handleDeleteSubmit = () => {
        // 비밀번호 검증 후 삭제 처리
        deleteComment(password);

        // 삭제 후 입력 필드 초기화
        setPassword("");
        setDeletePopup(false);
    };

    const handleDeletePopup = () => {
        setDeletePopup(true);
    };

    const handleCloseDeletePopup = () => {
        setDeletePopup(false);
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
                        <input
                            type="password"
                            className={styles["guestbook-password"]}
                            placeholder="비밀번호를 입력해주세요."
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
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
                        {comments.map((comment, index) => (
                            <GuestBookComment contents={comment} handleDeletePopup={handleDeletePopup} key={index} />
                        ))}
                    </ul>
                ) : (
                    <p className={styles['guestbook-no-result']}>등록된 방명록이 없습니다.</p>
                )}

                {
                    deletePopup &&
                    <div className={styles['guestbook-delete-popup']}>
                        <div className={styles['guestbook-delete-popup-dimmed']} onClick={handleCloseDeletePopup}></div>
                        <div className={styles['guestbook-delete-popup-inner']}>
                            <p className={styles['guestbook-delete-popup-desc']}>삭제하시겠습니까?</p>
                            <input
                                type="password"
                                className={styles['guestbook-password']}
                                placeholder="비밀번호를 입력해주세요."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="submit"
                                className={styles['guestbook-submit-button']}
                                onClick={handleDeleteSubmit}
                            >
                                확인
                            </button>
                            <button type="button" className={styles['guestbook-delete-popup-close-button']} onClick={handleCloseDeletePopup}>
                                <span className="blind">닫기</span>
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default GuestBook;
