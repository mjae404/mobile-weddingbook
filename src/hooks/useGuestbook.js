// useGuestbook.js
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import useFirebase from "./useFirebase";
import { useEffect, useState } from "react";

export default function useGuestbook() {
    const [data, setData] = useState({ comments: [] });
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { db } = useFirebase();

    const weddingCollectionRef = doc(db, "wedding", "guestbook");

    // Fetch comments from Firebase
    const getComments = async () => {
        try {
            const document = await getDoc(weddingCollectionRef);
            setData(document.data() || { comments: [] });
        } catch (error) {
            console.error("Error fetching comments", error);
            alert("데이터 가져오기 중 오류가 발생했습니다.");
        }
    };

    const addComment = async (name, password, message) => {
        if (!name || !password || !message) {
            alert("이름, 비밀번호, 메시지를 입력해주세요.");
            return;
        }
        const newComment = {
            name,
            password,
            message,
            timestamp: new Date().toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }),
        };

        try {
            await updateDoc(weddingCollectionRef, {
                comments: arrayUnion(newComment),
            });
            getComments();
        } catch (error) {
            console.error("Error adding comment", error);
            alert("댓글 추가 중 오류가 발생했습니다.");
        }
    };

    const validatePassword = (password) => {
        const foundComment = data.comments.find(comment => comment.password === password);
        return !!foundComment;
    };

    const deleteComment = async (password) => {
        try {
            const isValidPassword = validatePassword(password);

            if (isValidPassword) {
                const commentToRemove = data.comments.find(comment => comment.password === password);

                if (commentToRemove) {
                    await updateDoc(weddingCollectionRef, {
                        comments: arrayRemove(commentToRemove),
                    });
                    getComments();
                } else {
                    console.error("Comment not found with the provided password");
                    alert("해당 비밀번호로 방명록을 찾을 수 없습니다.");
                }
            } else {
                console.error("Invalid password");
                alert("잘못된 비밀번호입니다.");
            }
        } catch (error) {
            console.error("Error during deletion", error);
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        // Initial data fetch
        getComments();
    }, []);

    return {
        data,
        name,
        setName,
        password,
        setPassword,
        message,
        setMessage,
        addComment,
        deleteComment,
    };
}
